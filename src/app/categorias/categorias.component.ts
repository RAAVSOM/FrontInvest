import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InversionistaGeneral } from '../interfaces/usuario';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit{
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

  mandarLogin(): void {
    this.route.navigate(['login']);
  }

  mandarEmp(): void {
    this.route.navigate(['inversionista']);
  }
}
