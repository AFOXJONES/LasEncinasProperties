import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any> {
    return this.http.get(`${this.baseUrl}/properties`);
  }

  // postData(payload: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/endpoint`, payload);
  // }
}
