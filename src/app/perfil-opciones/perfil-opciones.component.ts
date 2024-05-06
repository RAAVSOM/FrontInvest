import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioGeneral, UsuarioLogin } from '../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-opciones',
  standalone: true,
  imports: [],
  templateUrl: './perfil-opciones.component.html',
  styleUrl: './perfil-opciones.component.css'
})
export class PerfilOpcionesComponent implements OnInit {
  usuarioSesion: UsuarioGeneral | undefined;
  user: UsuarioLogin = { usuario: '', clave: ''};

  constructor(private usuarioService: UsuarioService, private route: Router) {}

  ngOnInit(): void {
    const user = this.usuarioService.verificacion(this.user)
      .subscribe((usuario: UsuarioGeneral) => {
        this.usuarioSesion = usuario;
      });
  }

  mandarLogin(titulo: string): void{
    this.route.navigate([titulo]);
  }
}
