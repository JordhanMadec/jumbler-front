import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDark = localStorage.getItem('isDark') === 'true';
  public readonly isDark$ = new BehaviorSubject<boolean>(this.isDark);

  constructor() {}

  public setDark(value: boolean): void {
    localStorage.setItem('isDark', value + '');
    this.isDark = value;
    this.isDark$.next(this.isDark);
  }
}
