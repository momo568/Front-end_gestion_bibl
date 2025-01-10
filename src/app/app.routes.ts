import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './login/login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import {  NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './livre/index/index.component';
 import { EditComponent } from './livre/edit/edit.component';
 import { CreateComponent } from './livre/create/create.component';
import { ViewLivreComponent } from './livre/view/view.component';
import { ReservationModule } from './reservation/reservation.module';
import { IndexRComponent } from './rerservation/index-r/index-r.component';
import { ViewRComponent } from './rerservation/view-r/view-r.component';
import { EditRComponent } from './rerservation/edit-r/edit-r.component';
import { AddRComponent } from './rerservation/add-r/add-r.component';
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
    // { path: 'dashboard/Reservations', loadComponent:()=>import ('./reservations/reservations.component').then( c=>c.ReservationsComponent) },

    { path: 'dashboard/livre/index', component: IndexComponent },
    { path: 'dashboard/livre', redirectTo: 'post/index', pathMatch: 'full'},
    { path: 'dashboard/livre/:livreId/view', component: ViewLivreComponent  },
    { path: 'dashboard/livre/create', component: CreateComponent },
    { path: 'dashboard/livre/:livreId/edit', component: EditComponent } ,
    
    { path: 'dashboard/reservation/index-r', component: IndexRComponent },
    { path: 'dashboard/reservation', redirectTo: 'reservation/indexR', pathMatch: 'full'},
    { path: 'dashboard/reservation/:reservationId/view', component: ViewRComponent  },
    { path: 'dashboard/reservation/create', component: AddRComponent },
    { path: 'dashboard/reservation/:reservationId/edit', component: EditRComponent } 
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule],
  // })
  // export class AppRoutingModule {}