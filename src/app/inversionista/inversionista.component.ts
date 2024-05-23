import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inversionista',
  standalone: true,
  imports: [],
  templateUrl: './inversionista.component.html',
  styleUrl: './inversionista.component.css',
})
export class InversionistaComponent {
  constructor(private route: Router) {}
  mandarHome(): void {
    this.route.navigate(['home']);
  }
  mandarSubasta(): void {
    this.route.navigate(['suba']);
  }
}
