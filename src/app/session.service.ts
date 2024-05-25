import { Injectable } from '@angular/core';
import { EmprendedorGeneral, InversionistaGeneral, UsuarioGeneral, UsuarioLogin } from './interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  usuarioVacio: UsuarioGeneral | undefined;
  usuarioSesion: UsuarioGeneral | undefined;
  emprendedorSesion: EmprendedorGeneral | undefined;
  inversionistaSesion: InversionistaGeneral | undefined;
  user: UsuarioLogin = { usuario: '', clave: '' };
  constructor() {}

  setUsuarioSesion(usuarioSesion: UsuarioGeneral) {
    this.usuarioSesion = usuarioSesion;
    localStorage.setItem("usuario", JSON.stringify(usuarioSesion));
  }

  setInversionista(inversionistaSesion: InversionistaGeneral){
    this.inversionistaSesion = inversionistaSesion;
    localStorage.setItem("inversionista", JSON.stringify(inversionistaSesion));
  }

  setEmprendedor(emprendedorSesion: EmprendedorGeneral){
    this.emprendedorSesion = emprendedorSesion;
    localStorage.setItem("emprendedor", JSON.stringify(emprendedorSesion));
  }

  cerrarSesion() {
    this.user = { usuario: '', clave: '' };
    this.usuarioSesion = this.usuarioVacio;
  }
}
