import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css',
})
export class OfertasComponent {
  constructor(private route: Router) {}

  mandarLogin(): void {
    this.route.navigate(['login']);
  }
}
