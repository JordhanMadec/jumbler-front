import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { VisitorGuard } from './auth/visitor.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [VisitorGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
