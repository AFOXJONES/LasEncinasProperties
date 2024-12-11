import { Component } from '@angular/core';
import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  properties: any;

  constructor(private propertySrvice: PropertyService) {}

  ngOnInit(): void {
    this.propertySrvice.getProperties().subscribe({
      next: (response) => {
        this.properties = response;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
