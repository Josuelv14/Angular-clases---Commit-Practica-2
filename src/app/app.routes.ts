import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page';
import { ProfilePage } from './features/profile/pages/profile-page';
import { UiComponentsPage } from './components/ui/ui-components-page';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'students', component: StudentPage },
  { path: 'layouts', component: LayoutsPage },
  { path: 'students/:id', component: StudentDetailPage },
  { path: 'profile', component: ProfilePage },
  { 
    path: 'signup', 
    loadComponent: () => import('./features/singup-up/pages/signup-page').then(m => m.SignupPage) 
  },
  { path: 'project-config', component: ProjectConfigPage },
  { 
    path: 'simpsons', 
    loadComponent: () => import('./features/simpsons/pages/simpson-page/simpsons-page').then(m => m.SimpsonsPage) 
  },
  { 
    path: 'simpsons/:id', 
    loadComponent: () => import('./features/simpsons/pages/simpson-detail-page/simpson-detail-page').then(m => m.SimpsonDetailPage) 
  },
  { 
  path: 'ui-components', 
  loadComponent: () => import('./components/ui/ui-components-page').then(m => m.UiComponentsPage) 
  },
  { 
    path: 'auth', 
    loadComponent: () => import('./features/auth/pages/auth-page/auth-page').then(m => m.AuthPageComponent) 
  },
  { path: '**', redirectTo: '' },
];