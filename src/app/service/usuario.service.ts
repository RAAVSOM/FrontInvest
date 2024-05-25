import {
  InversionistaRegistro,
  InversionistaGeneral,
  UsuarioLogin,
  UsuarioRegister,
  tipo_documento,
  EmprendedorRegistro,
  EmprendedorGeneral,
  InversionistaCambio,
} from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGeneral, Persona } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  API_URL = 'http://localhost:9998/';
  constructor(private http: HttpClient) {}

  //verificacion y login
  verificacion(usuario: UsuarioLogin): Observable<UsuarioGeneral> {
    return this.http
      .post<UsuarioGeneral>(
        this.API_URL + 'api/login',
        usuario,
      );
  }


  //registro del inversionista
  registerInv(inversionista: InversionistaRegistro) {
    let inversionistaM = '';
    this.http
      .post<string>(this.API_URL +'inversionista/registerInversionista', inversionista)
      .subscribe((usuario: string) => {
        inversionistaM = usuario;
      });
    return inversionistaM;
  }

  //registro del emprendedor
  registerEmp(emprendedor: EmprendedorRegistro) {
    let emprendedorM = '';
    this.http
      .post<string>(this.API_URL +'emprendedor/registrarEmprendedor', emprendedor)
      .subscribe((usuario: string) => {
        emprendedorM = usuario;
      });
    return emprendedorM;
  }

  //login del inversionista
  buscarInversionista(id: number): Observable<InversionistaGeneral> {
    return this.http.get<InversionistaGeneral>(this.API_URL + 'inversionista/' + id)
  }

  actualizarInfo(inversionista: InversionistaCambio, id: number): Observable<string>{
    return this.http.put<string>(this.API_URL + 'inversionista/'+ id, inversionista);
  }

  //login emprendedor
  buscarEmprendedor(id: number): Observable<EmprendedorGeneral> {
    return this.http.get<EmprendedorGeneral>(this.API_URL + 'emprendedor/' + id)
  }

}
