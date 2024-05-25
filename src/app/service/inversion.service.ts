import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inversion } from '../interfaces/inversion';

@Injectable({
  providedIn: 'root'
})
export class InversionService {
  API_URL = 'http://localhost:9998/';
  constructor(private http: HttpClient) {}

  cargarInversiones(id:number): Observable<Inversion[]>{
    return this.http.get<Inversion[]>(this.API_URL + 'inversion/all/'+id);
  }

  verInversion(id:number): Observable<Inversion>{
    return this.http.get<Inversion>(this.API_URL + 'inversion/'+id);
  }
}
