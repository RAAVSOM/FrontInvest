import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NegocioAdminComponent } from '../negocio-admin/negocio-admin.component';
import { NegocioService } from '../service/negocio.service';
import { Observable, lastValueFrom } from 'rxjs';
import { NegocioInversionista } from '../interfaces/negocio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NegocioAdminComponent, AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  id = 0;
  negocioSesion! : Observable<NegocioInversionista>;
  constructor(private route: Router, private negocioService: NegocioService) {}

  aprobar(){
    console.log(this.id);
    let sesion = this.negocioService.aceptarNegocio(this.id);
    let mensaje = lastValueFrom(sesion);
    mensaje.then(mensaje =>{
      console.log(mensaje);
    });
  }

  verNegocio(id: number){
    this.id = id;
    this.negocioSesion = this.negocioService.verNegocioAdmin(id);
  }



  mandarHome(): void {
    this.route.navigate(['home']);
  }
}
