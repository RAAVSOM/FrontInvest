import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InversionistaGeneral } from '../interfaces/usuario';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css',
})
export class OfertasComponent {
  id_inversionista = 0;

  constructor(private route: Router) {}

  ngOnInit(): void {
    try{
      let data = localStorage.getItem("inversionista");
      let inversionista : InversionistaGeneral = data ? JSON.parse(data) : null;
      this.id_inversionista = inversionista.id_inversionista;
    }catch(error){

    }
  }

  mandarEmp(): void {
    this.route.navigate(['inversionista']);
  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }
}
