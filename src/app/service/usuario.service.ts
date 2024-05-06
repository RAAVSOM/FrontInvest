import { UsuarioLogin } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGeneral } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient){}

  verificacion(usuario: UsuarioLogin){
    return this.http.post<UsuarioGeneral>("http://localhost:9998/login", usuario);
  }
}
