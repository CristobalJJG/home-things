import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes) },
  { path: 'login', loadComponent: () => import('./enter-user/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./enter-user/register/register.page').then(m => m.RegisterPage) },
  { path: 'general', loadComponent: () => import('./tabs/general/general.page').then(m => m.GeneralPage) },
];
