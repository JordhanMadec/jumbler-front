import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faLightbulb,
  faMoon,
  faSun,
} from '@fortawesome/free-regular-svg-icons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FontAwesomeLibraryModule {
  constructor(private library: FaIconLibrary, private config: FaConfig) {
    this.config.defaultPrefix = 'far';

    this.library.addIcons(faMoon, faLightbulb);
  }
}
