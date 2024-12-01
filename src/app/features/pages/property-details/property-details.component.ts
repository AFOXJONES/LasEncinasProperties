import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit{
  propertyId!: string;
  propertyDetails: any; // Para almacenar los detalles de la propiedad
  loading: boolean = true; // Para manejar el estado de carga

  constructor(
    private route: ActivatedRoute,
    // private propertyService: PropertyService // Inyectamos el servicio
  ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id')!;

    // Llamamos al servicio para obtener los detalles de la propiedad
    // this.propertyService.getPropertyDetails(this.propertyId).subscribe(
    //   data => {
    //     this.propertyDetails = data;
    //     this.loading = false; // Cambiamos el estado de carga a falso cuando recibimos los datos
    //   },
    //   error => {
    //     console.error('Error al obtener los detalles de la propiedad', error);
    //     this.loading = false;
    //   }
    // );
  }
}
