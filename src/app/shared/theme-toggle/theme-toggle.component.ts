import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.sass'],
})
export class ThemeToggleComponent implements OnInit {
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {}

  public setDark(value: boolean): void {
    this.themeService.setDark(value);
  }
}
