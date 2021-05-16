import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.sass'],
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  public isDark = false;

  private subscriptions: Subscription[] = [];

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    const themeSubscription = this.themeService.isDark$.subscribe((value) => {
      this.isDark = value;
    });

    this.subscriptions.push(themeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription && subscription.unsubscribe()
    );
  }

  public toggleDark(): void {
    this.themeService.setDark(!this.isDark);
  }
}
