import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprendedor',
  standalone: true,
  imports: [],
  templateUrl: './emprendedor.component.html',
  styleUrl: './emprendedor.component.css',
})
export class EmprendedorComponent {
  constructor(private route: Router) {}
  mandarHome(): void {
    this.route.navigate(['home']);
  }
  mandarSubasta(): void {
    this.route.navigate(['suba']);
  }
}
