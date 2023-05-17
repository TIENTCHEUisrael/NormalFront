import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,catchError,tap,of,map } from 'rxjs';
import { Abonne } from "../models/abonne";

@Injectable({
  providedIn: 'root'
})
export class AbonneService {

  private apiUrl = 'http://localhost:8000/api/abonne'; 

  constructor(private http: HttpClient) { }


   // Obtient tous les abonnés
  getAbonnes(): Observable<Abonne[]> {
    console.log('-Enter-');
    return this.http.get<Abonne[]>(this.apiUrl).pipe(
      tap(() => console.log('Getted')),
      catchError((error) => this.handleError(error,[]))
    );
  }

  getAbonneById(AbonneId: string): Observable<Abonne[]>{
    return this.http.get<Abonne[]>(`${this.apiUrl}/${AbonneId}`).pipe(
      catchError((error) => this.handleError(error,undefined))
    );
  }


  createAbonne(abonne: Abonne): Observable<Abonne> {
    const header = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log('-- Enter --');
    return this.http.post<Abonne>(this.apiUrl, abonne,header).pipe(
      catchError((error) => this.handleError(error, null))
    );
  }

  updateAbonne(id: number, abonne: Abonne): Observable<Abonne> {
    console.log('-- Enter --');
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Abonne>(url, abonne);
  }

  deleteAbonne(id:number){
    console.log('-- Enter --');
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(map((res:any)=>{
      return res;
    }))
  }

 private handleError(error: Error, errorValue: any){
   console.error(error);
   return of(errorValue);
 }
}
