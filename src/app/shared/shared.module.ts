import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [CommonModule, FontAwesomeModule, FontAwesomeLibraryModule],
  exports: [
    ThemeToggleComponent,
    CommonModule,
    FontAwesomeModule,
    FontAwesomeLibraryModule,
  ],
})
export class SharedModule {}
