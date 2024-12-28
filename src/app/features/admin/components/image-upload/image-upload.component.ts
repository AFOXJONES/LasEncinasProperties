
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertyManagementService } from '../../services/property-management.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFiles: File[] = [];

  constructor(
    private http: HttpClient,
    private propertyManagementService: PropertyManagementService
    ) {}



  // Este método captura las imágenes seleccionadas
  onFilesSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  // Este método se ejecuta cuando el usuario hace clic en el botón de subir
  onSubmit(): void {
    if (this.selectedFiles.length === 0) {
      console.error('No se han seleccionado archivos.');
      return; // Prevenir el envío de un formulario vacío
    }

    const formData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files[]', this.selectedFiles[i]);
    }

  //   console.log('vamos a probar');
  //   this.propertyManagementService.uploadFiles(formData).subscribe(
  //     (response) => {
  //       console.log('Archivos subidos con éxito', response);
  //     },
  //     (error) => {
  //       console.error('Error al subir los archivos', error);
  //     }
  //   );
  }

}
