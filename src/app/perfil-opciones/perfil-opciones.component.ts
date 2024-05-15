import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioGeneral, UsuarioLogin } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-opciones',
  standalone: true,
  imports: [],
  templateUrl: './perfil-opciones.component.html',
  styleUrl: './perfil-opciones.component.css',
})
export class PerfilOpcionesComponent implements OnInit {
  usuarioSesion: UsuarioGeneral | undefined;
  user: UsuarioLogin = { usuario: '', clave: '' };

  constructor(
    private usuarioService: UsuarioService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.usuarioSesion = this.usuarioService.verificacion(this.user);
  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }
}
