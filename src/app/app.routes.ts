import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'products', component: Products},
  { path: 'employees', component: EmployeeDirectory},
  { path: 'about', component: About},
  { path: '**', component: NotFound}
];
