import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { Persona, UsuarioGeneral, tipo_documento } from '../interfaces/usuario';
import { Observable, lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-perfil-opciones',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './perfil-opciones.component.html',
  styleUrl: './perfil-opciones.component.css',
})
export class PerfilOpcionesComponent implements OnInit {

  tipo_documento: tipo_documento = {
    id_tipodocumento : 0,
    nombre_tipo: 'cc'
  }
  persona: Persona = {
    id_persona: 0,
    nombre_persona : '',
    apellido_persona : '',
    ciudad: '',
    telefono: 0,
    tipo_documento: this.tipo_documento
  }
  usuarioSes: UsuarioGeneral = {
    id_usuario: 0,
    usuario: '',
    clave: '',
    correo: '',
    persona: this.persona,
    tipo_usuario: '',
  };

  usuarioSession! : Observable<UsuarioGeneral> ;

  constructor(
    private session: SessionService,
    private usuarioService: UsuarioService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    try {
      let data = localStorage.getItem("usuario");
      let user = data ? JSON.parse(data) : this.usuarioSes
      this.usuarioSession  = this.usuarioService.verificacion(user);
    } catch (error) {

    }

  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }

  mandarHome(): void {
    localStorage.removeItem("usuario");
    this.session.cerrarSesion();
    this.route.navigate(['home']);
    location.reload();
  }

  mandarConfig(): void {
    this.route.navigate(['confi']);
  }

}
