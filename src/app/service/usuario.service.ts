import {
  Inversionista,
  InversionistaGeneral,
  UsuarioLogin,
  UsuarioRegister,
} from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGeneral, Persona } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  //verificacion y login
  verificacion(usuario: UsuarioLogin): UsuarioGeneral {
    let usuarioSesion: UsuarioGeneral = {
      id_usuario: 0,
      usuario: '',
      clave: '',
      correo: '',
      persona: {},
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

  /*
  //registro del emprendedor
  registerUser(usuario: UsuarioRegister) {
    let usuarioSesion: UsuarioGeneral = {
      id_usuario: 0,
      usuario: '',
      clave: '',
      correo: '',
      persona: {},
      tipo_usuario: '',
    };
    this.http
      .post<UsuarioGeneral>('https://inbestbackend.onrender.com/api', usuario)
      .subscribe((usuario: UsuarioGeneral) => {
        usuarioSesion = usuario;
      });
    return usuarioSesion;
  }

  //registro del inversionista
  registerInv(inversionista: Inversionista) {
    let inversionistaM = '';
    this.http
      .post<string>('https://inbestbackend.onrender.com/api', inversionista)
      .subscribe((usuario: string) => {
        inversionistaM = usuario;
      });
    return inversionistaM;
  }*/

  //login del inversionista
  buscarInversionista(id: number) {}
}
