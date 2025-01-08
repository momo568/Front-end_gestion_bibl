import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './login/login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
 
export const routes: Routes = [
  { path: 'login', loadComponent:()=>import ('./login/login.component').then( c=>c.LoginComponent) },
  { path: 'dashboard', component: DashboardComponent },
    //{ path: '/gestion-bibliotheque', component: GestionBibliothequeComponent },//
    { path: '', loadComponent:()=>import ('./pages/home/home.component').then( c=>c.HomeComponent) },
    { path: 'about', loadComponent:()=>import ('./pages/about/about.component').then( c=>c.AboutComponent) },
    { path: 'home', loadComponent:()=>import ('./pages/home/home.component').then( c=>c.HomeComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect from '/' to '/home'
    { path: 'inscription', loadComponent:()=>import ('./inscription/inscription.component').then( c=>c.InscriptionComponent) },
    // { path: 'dashboard', loadComponent:()=>import ('./dashboard/dashboard.component').then( c=>c.DashboardComponent) },

    { path: 'dashboard/livre', loadComponent:()=>import ('./livre/livre.component').then( c=>c.LivreComponent) },
    { path: 'dashboard/Reservations', loadComponent:()=>import ('./reservations/reservations.component').then( c=>c.ReservationsComponent) },

   
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule],
  // })
  // export class AppRoutingModule {}