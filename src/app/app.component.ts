import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { PerfilOpcionesComponent } from './perfil-opciones/perfil-opciones.component';
import { CategoriasComponent } from './categorias/categorias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OfertasComponent,
    PerfilOpcionesComponent,
    CategoriasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontInvest';
}
