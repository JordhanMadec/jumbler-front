import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule],
  exports: [],
})
export class AuthModule {}
