import { Component } from '@angular/core';
import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  properties: any;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe({
      next: (response) => {
        this.properties = response;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });

  }
}
