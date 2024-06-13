import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuardGuard],
  },
];

export const pages = [
  LoginPageComponent,
  RegisterComponent,
  DashboardComponent,
];
