import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule],
})
export class DashboardModule {}
