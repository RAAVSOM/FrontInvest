import { InversionService } from './../service/inversion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilOpcionesComponent } from '../perfil-opciones/perfil-opciones.component';
import { AsyncPipe } from '@angular/common';
import { Observable, lastValueFrom } from 'rxjs';
import { NegocioInversionista } from '../interfaces/negocio';
import { NegocioService } from '../service/negocio.service';
import { SubastaListComponent } from '../subasta-list/subasta-list.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Solicitud, SolicitudRegistro } from '../interfaces/solicitud';
import { SolicitudService } from '../service/solicitud.service';
import { EmprendedorGeneral, InversionistaGeneral } from '../interfaces/usuario';
import { Inversion } from '../interfaces/inversion';

@Component({
  selector: 'app-subasta',
  standalone: true,
  imports: [PerfilOpcionesComponent, AsyncPipe, SubastaListComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './subasta.component.html',
  styleUrl: './subasta.component.css',
})
export class SubastaComponent implements OnInit{
  soliForm = new FormGroup({
    valor_solicitud: new FormControl(0),
    porcentaje_rentabilidad: new FormControl(0),
    porcentaje_liquidez: new FormControl(0),
    nivel_riezgotolerado: new FormControl(0)
  });

  id_solicitud = 0;
  id_negocio = 0;
  negocioSesion! : Observable<NegocioInversionista> ;
  inverSesion! : InversionistaGeneral;
  empSesion! : EmprendedorGeneral;
  solicitud! : Observable<Solicitud>;
  solicitudSesion! : Solicitud;
  inversionSesion! : Observable<Inversion>;


  constructor(private route: Router, private negocioService: NegocioService,
     private solicitudService: SolicitudService, private inversionService: InversionService) {}

  ngOnInit(): void {
    try{
      let data = localStorage.getItem("inversionista");
      this.inverSesion = data ? JSON.parse(data) : null;

      let dataE = localStorage.getItem("emprendedor");
      this.empSesion = dataE ? JSON.parse(dataE) : null;

      this.id_negocio = parseInt(localStorage.getItem("negocio") ?? '0');
      this.negocioSesion = this.negocioService.verNegocioInv(this.id_negocio);
    }catch(error){
    }
  }

  crearSolicitud(){
    let solicitudReg: SolicitudRegistro = {
      valor_solicitud: this.soliForm.value.valor_solicitud ?? 0,
      porcentaje_rentabilidad: this.soliForm.value.porcentaje_rentabilidad ?? 0,
      porcentaje_liquidez: this.soliForm.value.porcentaje_liquidez ?? 0,
      nivel_riezgotolerado: this.soliForm.value.nivel_riezgotolerado ?? 0
    }

    let sesion = this.solicitudService.crearSolicitud(solicitudReg, this.inverSesion.id_inversionista, this.id_negocio);
    let mensaje = lastValueFrom(sesion);
    mensaje.then(mensaje =>{
      console.log(mensaje);
    });
  }

  verSol(id : number){
    this.id_solicitud = id;
    this.solicitud = this.solicitudService.verSolicitud(id);
    let solicitud = lastValueFrom(this.solicitud);
    solicitud.then(sol =>{
      this.solicitudSesion = sol;
    });
  }

  aceptarSolicitud(){
    let sesion = this.solicitudService.aceptarSolicitud(this.id_negocio, this.solicitudSesion.inversionista.id_inversionista,
      this.empSesion.id_emprendedor, this.solicitudSesion.id_solicitud
    );
    let mensaje = lastValueFrom(sesion);
    mensaje.then(msj =>{
      console.log(msj);
    });
  }

  cerrarSubasta(){
    let sesion = this.solicitudService.cerrarSubasta(this.id_negocio);
    let mensaje = lastValueFrom(sesion);
    mensaje.then(msj =>{
      console.log(msj);
    });
  }

  verInv(id:number){
    this.inversionSesion = this.inversionService.verInversion(id);
  }
}
