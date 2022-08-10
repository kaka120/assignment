import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { bodyModule } from '../app/shared/components/body/body.component';
import { authentication } from './shared/components/auth-layout/authentication.component';
import { AuthGuard } from '../app/core/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'bodyModule',
    component: bodyModule,
    canActivate: [AuthGuard], 
    children: [
          {
            path: '',
            loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.dashboardodule),
            canActivate: [AuthGuard]
          }
    ]
  },
  {
      path: 'auth',
      component: authentication,
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
       canActivate: [AuthGuard],               
  },
  {
    path: 'signup',
    component: authentication,
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule),
     canActivate: [AuthGuard],               
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
