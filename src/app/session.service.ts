import { Injectable } from '@angular/core';
import { UsuarioGeneral, UsuarioLogin } from './interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  usuarioVacio: UsuarioGeneral | undefined;
  usuarioSesion: UsuarioGeneral | undefined;
  user: UsuarioLogin = { usuario: '', clave: '' };
  constructor() {}

  getUser() {
    return this.user;
  }

  getUsuarioSesion() {
    return this.usuarioSesion;
  }

  setUsuarioSesion(usuarioSesion: UsuarioGeneral) {
    this.usuarioSesion = usuarioSesion;
  }

  cerrarSesion() {
    this.user = { usuario: '', clave: '' };
    this.usuarioSesion = this.usuarioVacio;
  }
}
