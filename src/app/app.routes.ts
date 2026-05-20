import { Routes } from '@angular/router';
import { HomePage } from '../features/home/home-page/home-page';
import { StudentDetailPage } from '../features/students/pages/student-detail-page/student-detail-page';
import { StudentPage } from '../features/students/pages/student-page/student-page';

export const routes: Routes = [
  { path: '', component: HomePage },

  { path: 'students', component: StudentPage },

  { path: 'students/:id', component: StudentDetailPage },

  // redireccionamiento
  { path: '**', redirectTo: '' }
];