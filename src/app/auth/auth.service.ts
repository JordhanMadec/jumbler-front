import * as moment from 'moment';

import CredentialsModel from './credentials.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private credentials: CredentialsModel;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.credentials = this.getCredentialsFromLocalStorage();
  }

  public async isAuthenticated(): Promise<boolean> {
    if (!this.credentials?.token) {
      return false;
    }

    if (moment(this.credentials.expiryDate).isAfter()) {
      return true;
    }

    // Refresh token if it expired
    await this.refreshToken();

    return (
      !!this.credentials?.token && moment(this.credentials.expiryDate).isAfter()
    );
  }

  private saveCredentialsToLocalStorage(): void {
    this.credentials?.token &&
      localStorage.setItem('token', this.credentials?.token);

    this.credentials?.refreshToken &&
      localStorage.setItem('refreshToken', this.credentials?.refreshToken);

    this.credentials?.expiryDate &&
      localStorage.setItem(
        'expiryDate',
        this.credentials?.expiryDate.toISOString()
      );
  }

  private getCredentialsFromLocalStorage(): CredentialsModel {
    return new CredentialsModel({
      token: localStorage.getItem('token') || '',
      refreshToken: localStorage.getItem('refreshToken') || '',
      expiryDate: localStorage.getItem('expiryDate') || '',
    });
  }

  public getLoginUrl(): Promise<{ loginUrl: string }> {
    return this.http
      .get<{ loginUrl: string }>(`${this.baseUrl}/auth/login-url`)
      .toPromise();
  }

  public async getToken(code: string): Promise<void> {
    this.credentials = await this.http
      .post<CredentialsModel>(`${this.baseUrl}/auth/credentials`, { code })
      .pipe(map((credentials) => new CredentialsModel(credentials)))
      .toPromise();

    this.saveCredentialsToLocalStorage();

    this.router.navigate(['/']);
  }

  public async refreshToken(): Promise<void> {
    this.credentials = await this.http
      .post<CredentialsModel>(`${this.baseUrl}/auth/refresh-credentials`, {
        refreshToken: this.credentials.refreshToken,
      })
      .pipe(map((credentials) => new CredentialsModel(credentials)))
      .toPromise();

    this.saveCredentialsToLocalStorage();
  }

  public logout(): void {
    this.credentials = {};
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
