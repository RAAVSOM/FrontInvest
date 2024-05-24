import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { UsuarioGeneral } from '../interfaces/usuario';

@Component({
  selector: 'app-perfil-opciones',
  standalone: true,
  imports: [],
  templateUrl: './perfil-opciones.component.html',
  styleUrl: './perfil-opciones.component.css',
})
export class PerfilOpcionesComponent implements OnInit {
  usuarioSesion: UsuarioGeneral = {
    id_usuario: 0,
    usuario: '',
    clave: '',
    correo: '',
    persona: {},
    tipo_usuario: '',
  };

  constructor(
    private session: SessionService,
    private usuarioService: UsuarioService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.usuarioSesion = this.usuarioService.verificacion(
      this.session.getUser(),
    );
    this.session.setUsuarioSesion(this.usuarioSesion);
  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }

  mandarHome(): void {
    this.session.cerrarSesion();
    this.route.navigate(['home']);
  }
}
