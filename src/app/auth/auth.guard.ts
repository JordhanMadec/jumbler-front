import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    if (!(await this.authService.isAuthenticated())) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
