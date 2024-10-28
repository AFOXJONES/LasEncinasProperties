import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

  testimonials = [
    { comment: 'Las Encinas Properties hizo realidad nuestro sueño de tener una casa de lujo. Su atención personalizada fue excepcional.', author: 'María García' },
    { comment: 'Excelente servicio y apoyo durante todo el proceso de compra. ¡Muy recomendados!', author: 'Juan Pérez' },
    { comment: 'Gracias a Las Encinas Properties encontramos la casa perfecta para nuestra familia.', author: 'Laura Gómez' }
  ];

  currentIndex = 0;

  prevTestimonial() {
    this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
  }
}
