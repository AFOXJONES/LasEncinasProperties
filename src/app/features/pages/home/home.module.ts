import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '../../../shared/shared.module';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from '../../admin/admin.module';




@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SearchBarComponent,
    TestimonialComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AdminModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
