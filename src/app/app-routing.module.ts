import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { PropertyDetailsComponent } from './features/pages/property-details/property-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'property-detail/:id', component: PropertyDetailsComponent },
  { path: 'user-profile', component:  HomeComponent},
  { path: 'about-us', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
