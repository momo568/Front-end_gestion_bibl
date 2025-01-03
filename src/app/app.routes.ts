import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './login/login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { SidebareComponent } from './sidebare/sidebare.component';
 
export const routes: Routes = [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    { path: 'sidebare',component: SidebareComponent },

    { path: 'login',component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    //{ path: '/gestion-bibliotheque', component: GestionBibliothequeComponent },//
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule],
  // })
  // export class AppRoutingModule {}