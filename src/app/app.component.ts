import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'jumbler-front';

  public isDark$ = this.themeService.isDark$;

  constructor(private readonly themeService: ThemeService) {}
}
