import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subasta',
  standalone: true,
  imports: [],
  templateUrl: './subasta.component.html',
  styleUrl: './subasta.component.css',
})
export class SubastaComponent {
  constructor(private route: Router) {}
  mandarHome(): void {
    this.route.navigate(['home']);
  }
}
