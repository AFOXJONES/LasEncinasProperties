import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyManagementService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Obtener URLs pre-firmadas para subir imágenes
  getPresignedUrls(fileNames: string[]): Observable<string[]> {
    return this.http.post<string[]>(`${this.baseUrl}/generate-presigned-urls`, fileNames);
  }

  // Guardar la URL de la imagen después de subirla a S3
  saveImage(fileName: string, s3Url: string, propertyId: number): Observable<string> {
    const body = new FormData();
    body.append('fileName', fileName);
    body.append('s3Url', s3Url);
    body.append('propertyId', propertyId.toString());

    return this.http.post(`${this.baseUrl}/save-image`, body, { responseType: 'text' });
  }


}
