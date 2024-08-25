import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./__shared/components/home/home.component').then((c) => c.HomeComponent) },
  { path: 'country/:id', loadComponent: () => import('./__shared/components/country/country.component').then((c) => c.CountryComponent) },
  { path: '**', redirectTo: '' }
];
