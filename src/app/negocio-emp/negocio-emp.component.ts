import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { NegocioService } from '../service/negocio.service';
import { Observable } from 'rxjs';
import { NegocioEmprendedor } from '../interfaces/negocio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-negocio-emp',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './negocio-emp.component.html',
  styleUrl: './negocio-emp.component.css'
})
export class NegocioEmpComponent implements OnInit{
  negocios$! : Observable<NegocioEmprendedor[]> ;
  constructor(
    private route: Router,
    private session: SessionService,
    private negocioService: NegocioService
  ) {}

  ngOnInit(): void {
    this.negocios$ = this.negocioService.cargarNegociosEmprendedor(this.session.emprendedorSesion?.id_emprendedor ?? 0);
  }

  mandarSubasta(id: number): void {
    localStorage.setItem("negocio", id.toString());
    this.route.navigate(['suba']);
  }
}
