import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilOpcionesComponent } from '../perfil-opciones/perfil-opciones.component';
import { UsuarioService } from '../service/usuario.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-emprendedor',
  standalone: true,
  imports: [PerfilOpcionesComponent],
  templateUrl: './emprendedor.component.html',
  styleUrl: './emprendedor.component.css',
})
export class EmprendedorComponent {
  constructor(
    private route: Router,
    private session: SessionService,
  ) {}

  mandarSubasta(): void {
    this.route.navigate(['suba']);
  }

  mandarHome(): void {
    this.session.cerrarSesion();
    this.route.navigate(['home']);
  }
}
