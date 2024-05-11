import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfertasComponent,
    PerfilOpcionesComponent,
    CategoriasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
