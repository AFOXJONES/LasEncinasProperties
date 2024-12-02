import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    // Variables para los filtros
    selectedOption: string = 'comprar'; // Opción seleccionada (por defecto: comprar)
    location: string = '';              // Ubicación introducida por el usuario
    minPrice: number | null = null;     // Precio mínimo
    maxPrice: number | null = null;     // Precio máximo

    // Array de propiedades simuladas
    properties = [
      { id: 1, type: 'comprar', location: 'Madrid', price: 200000 },
      { id: 2, type: 'alquilar', location: 'Barcelona', price: 1000 },
      { id: 3, type: 'comprar', location: 'Valencia', price: 150000 },
      { id: 4, type: 'alquilar', location: 'Sevilla', price: 800 }
    ];

    // Resultado filtrado
    filteredProperties = [...this.properties];

    // Método para seleccionar una opción (comprar o alquilar)
    selectOption(option: string) {
      this.selectedOption = option;
    }

    // Método para aplicar el filtro
    applyFilter(): void {
      this.filteredProperties = this.properties.filter(property => {
        const matchesType = property.type === this.selectedOption;
        const matchesLocation = this.location
          ? property.location.toLowerCase().includes(this.location.toLowerCase())
          : true;
        const matchesMinPrice = this.minPrice !== null ? property.price >= this.minPrice : true;
        const matchesMaxPrice = this.maxPrice !== null ? property.price <= this.maxPrice : true;

        return matchesType && matchesLocation && matchesMinPrice && matchesMaxPrice;
      });

      console.log('Propiedades filtradas:', this.filteredProperties);
    }
}
