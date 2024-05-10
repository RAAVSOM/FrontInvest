import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent {
  constructor(private route: Router) {}

  mandarLogin(titulo: string): void {
    this.route.navigateByUrl('/login');
  }
}
