import { Routes } from '@angular/router';
import { ToDoComponentComponent } from './todo/to-do-component/to-do-component.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home'
  { path: 'home', component: ToDoComponentComponent }
];
