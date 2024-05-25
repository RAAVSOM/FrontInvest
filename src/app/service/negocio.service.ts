import { NegocioEmprendedor, NegocioRegister } from './../interfaces/negocio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NegocioInversionista } from '../interfaces/negocio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  API_URL = 'http://localhost:9998/';
  constructor(private http: HttpClient) {}

  //----------------funciones inversionista------------------------
  cargarNegociosInversionista(): Observable<NegocioInversionista[]> {
    return this.http.get<NegocioInversionista[]>(this.API_URL + 'negocio');
  }

  verNegocioInv(id: number){
    return this.http.get<NegocioInversionista>(this.API_URL+ 'negocio/vernegocioi/' + id);
  }

  //-----------------funciones emprendedor------------------------
  crearNegocio(negocio: NegocioRegister, id: number){
    return this.http.post<NegocioEmprendedor>(this.API_URL + 'negocio/negocioAgregar/'+id, negocio);
  }

  cargarNegociosEmprendedor(id: number): Observable<NegocioEmprendedor[]> {
    return this.http.get<NegocioEmprendedor[]>(this.API_URL + 'negocio/cargarnegocios/'+id);
  }

  //------------------funciones admin-----------------------------------
  cargarNegociosAdmin(): Observable<NegocioInversionista[]>{
    return this.http.get<NegocioInversionista[]>(this.API_URL + 'negocio/sinaprobar');
  }

  verNegocioAdmin(id: number){
    return this.http.get<NegocioInversionista>(this.API_URL+ 'negocio/vernegocioi/' + id);
  }

  aceptarNegocio(id: number) : Observable<string>{
    return this.http.put<string>(this.API_URL + 'negocio/aceptarNegocio/'+id, null);
  }
}
