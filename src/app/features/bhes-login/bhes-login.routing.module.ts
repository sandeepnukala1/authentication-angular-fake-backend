import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhesLoginComponent } from './bhes-login.component';

import { AuthGuardService } from './../../_auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BhesLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhesLoginRoutingModule { }