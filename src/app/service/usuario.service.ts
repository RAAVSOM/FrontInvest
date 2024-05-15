import { UsuarioLogin } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGeneral } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  verificacion(usuario: UsuarioLogin): UsuarioGeneral {
    let usuarioSesion: UsuarioGeneral = {
      id_usuario: 0,
      usuario: '',
      clave: '',
      correo: '',
      persona: 0,
      tipo_usuario: '',
    };
    this.http
      .post<UsuarioGeneral>(
        'https://inbestbackend.onrender.com/api/login',
        usuario,
      )
      .subscribe((usuario: UsuarioGeneral) => {
        usuarioSesion = usuario;
      });
    return usuarioSesion;
  }
}
