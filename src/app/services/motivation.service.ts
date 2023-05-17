import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Motivation } from "../models/motivation";
import { Observable,catchError,tap,of,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MotivationService {

  private apiUrl = 'http://127.0.0.1:8000/motivation';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Motivation[]> {
    return this.http.get<Motivation[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: Motivation): Observable<Motivation> {
    return this.http.post<Motivation>(`${this.apiUrl}`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
