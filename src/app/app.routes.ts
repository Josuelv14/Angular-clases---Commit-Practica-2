import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'students', component: StudentPage },
  { path: 'layouts', component: LayoutsPage },
  { path: 'students/:id', component: StudentDetailPage },
  { 
    path: 'signup', 
    loadComponent: () => import('./features/singup-up/pages/signup-page').then(m => m.SignupPage) 
  },
  { path: '**', redirectTo: '' },
];