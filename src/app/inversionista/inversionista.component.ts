import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NegocioInvComponent } from '../negocio-inv/negocio-inv.component';
import { Observable } from 'rxjs';
import { NegocioEmprendedor } from '../interfaces/negocio';
import { NegocioService } from '../service/negocio.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-inversionista',
  standalone: true,
  imports: [NegocioInvComponent, AsyncPipe],
  templateUrl: './inversionista.component.html',
  styleUrl: './inversionista.component.css',
})
export class InversionistaComponent {
  id = 0;
  negocioSesion! : Observable<NegocioEmprendedor>;

  constructor(private route: Router, private negocioService: NegocioService) {}

  verNegocio(id: number){
    this.id = id;
    this.negocioSesion = this.negocioService.verNegocioInv(id);
  }


  mandarHome(): void {
    this.route.navigate(['home']);
  }

  mandarSubasta(): void {
    localStorage.setItem("negocio", this.id.toString());
    this.route.navigate(['suba']);
  }

  mandarConfig(): void {
    this.route.navigate(['confi']);
  }
}
