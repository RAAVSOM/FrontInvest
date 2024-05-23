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
  /*
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
      .post<UsuarioGeneral>('https://inbestbackend.onrender.com/', usuario)
      .subscribe((usuario: UsuarioGeneral) => {
        usuarioSesion = usuario;
      });
    return usuarioSesion;
  }

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

  registerInv(inversionista: Inversionista) {
    let inversionistaM = '';
    this.http
      .post<string>('https://inbestbackend.onrender.com/api', inversionista)
      .subscribe((usuario: string) => {
        inversionistaM = usuario;
      });
    return inversionistaM;
  }*/
}
