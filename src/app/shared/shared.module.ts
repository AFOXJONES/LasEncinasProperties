import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PropertyCardComponent,
    PropertyListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PropertyCardComponent,
    PropertyListComponent
  ]
})
export class SharedModule { }
