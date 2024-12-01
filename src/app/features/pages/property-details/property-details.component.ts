import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit{

  propertyId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes hacer la solicitud a la API o usar el ID para cargar los datos de la propiedad
  }
}
