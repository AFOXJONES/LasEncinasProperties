import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertyListComponent } from './components/property-list/property-list.component';



@NgModule({
  declarations: [
    PropertyCardComponent,
    PropertyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PropertyCardComponent,
    PropertyListComponent
  ]
})
export class SharedModule { }
