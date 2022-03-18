import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhesHomeComponent } from 'src/app/features/bhes-home/bhes-home.component';
import { AuthGuardService } from './_auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BhesHomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'login',
    loadChildren: () => import('../app/features/bhes-login/bhes-login.module').then(m => m.BhesLoginModule)
  }, 

  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
