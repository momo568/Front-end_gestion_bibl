import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './login/login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import {  NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './livre/index/index.component';
import { ViewComponent } from './livre/view/view.component';
import { EditComponent } from './livre/edit/edit.component';
 import { CreateComponent } from './livre/create/create.component';
export const routes: Routes = [
  { path: 'login', loadComponent:()=>import ('./login/login.component').then( c=>c.LoginComponent) },
  { path: 'dashboard', component: DashboardComponent },
    //{ path: '/gestion-bibliotheque', component: GestionBibliothequeComponent },//
    { path: '', loadComponent:()=>import ('./pages/home/home.component').then( c=>c.HomeComponent) },
    { path: 'about', loadComponent:()=>import ('./pages/about/about.component').then( c=>c.AboutComponent) },
    { path: 'home', loadComponent:()=>import ('./pages/home/home.component').then( c=>c.HomeComponent) },
    { path: 'sidebar', loadComponent:()=>import ('./sidebar/sidebar.component').then( c=>c.SidebarComponent) },

    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect from '/' to '/home'
    { path: 'inscription', loadComponent:()=>import ('./inscription/inscription.component').then( c=>c.InscriptionComponent) },
    // { path: 'dashboard', loadComponent:()=>import ('./dashboard/dashboard.component').then( c=>c.DashboardComponent) },

    // { path: 'dashboard/livre', loadComponent:()=>import ('./livre/livre.component').then( c=>c.LivreComponent) },
    { path: 'dashboard/Reservations', loadComponent:()=>import ('./reservations/reservations.component').then( c=>c.ReservationsComponent) },

    { path: 'dashboard/livre/index', component: IndexComponent },
    { path: 'dashboard/livre', redirectTo: 'post/index', pathMatch: 'full'},
    { path: 'dashboard/livre/:livreId/view', component: ViewComponent },
    { path: 'dashboard/livre/create', component: CreateComponent },
    { path: 'dashboard/livre/:livreId/edit', component: EditComponent } 
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule],
  // })
  // export class AppRoutingModule {}