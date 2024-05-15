import { Component } from '@angular/core';
import { OfertasComponent } from '../ofertas/ofertas.component';
import { PerfilOpcionesComponent } from '../perfil-opciones/perfil-opciones.component';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfertasComponent, PerfilOpcionesComponent, CategoriasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
