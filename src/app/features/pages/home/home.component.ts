import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  properties = [
    {
      title: 'Villa de Lujo en La Costa',
      type:'Alquiler',
      price: '€2,500,000',
      area: '350 m²',
      rooms: 5,
      floors: 2,
      bathrooms: 4,
      imageUrl: 'assets/img/casa1.jpg'
    },
    {
      title: 'Apartamento en la Ciudad',
      type:'Venta',
      price: '€1,200,000',
      area: '120 m²',
      rooms: 3,
      floors: 1,
      bathrooms: 2,
      imageUrl: 'assets/img/casa1.jpg'
    },
    {
      title: 'Apartamento en la Ciudad',
      type:'Venta',
      price: '€1,200,000',
      area: '120 m²',
      rooms: 3,
      floors: 1,
      bathrooms: 2,
      imageUrl: 'assets/img/casa1.jpg'
    },
    {
      title: 'Apartamento en la Ciudad',
      type:'Venta',
      price: '€1,200,000',
      area: '120 m²',
      rooms: 3,
      floors: 1,
      bathrooms: 2,
      imageUrl: 'assets/img/casa1.jpg'
    },

    // Agrega más propiedades según sea necesario
  ];
}
