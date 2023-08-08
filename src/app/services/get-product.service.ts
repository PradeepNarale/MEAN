import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }

  getCardData(): Observable<any> {
    return this.http.get<any>('http://localhost:3005/getProduct');
  }
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3005/deleteProduct/${id}`);
  }
  getSingle(id: string): Observable<any> {
    return this.http.get(`http://localhost:3005/getProduct/${id}`);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.post(`http://localhost:3005/updateProduct/${id}`, product);
  }
}
