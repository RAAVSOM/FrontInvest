import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioGeneral, UsuarioLogin } from '../interfaces/usuario';
import { Router } from '@angular/router';

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
    this.usuarioService
      .verificacion(this.user)
      .subscribe((usuario: UsuarioGeneral) => {
        this.usuarioSesion = usuario;
      });

    console.log(this.usuarioSesion);
  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }
}
