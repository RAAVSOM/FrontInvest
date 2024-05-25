import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { EmprendedorGeneral, InversionistaGeneral, UsuarioGeneral } from '../interfaces/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Solicitud } from '../interfaces/solicitud';
import { SolicitudService } from '../service/solicitud.service';
import { AsyncPipe } from '@angular/common';
import { Inversion } from '../interfaces/inversion';
import { NegocioService } from '../service/negocio.service';
import { InversionService } from '../service/inversion.service';
import { NegocioEmprendedor, NegocioGeneral } from '../interfaces/negocio';

@Component({
  selector: 'app-subasta-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './subasta-list.component.html',
  styleUrl: './subasta-list.component.css'
})
export class SubastaListComponent implements OnInit{
  id_negocio = 0;
  tipo_usuario = true;
  usuarioSession! : Observable<UsuarioGeneral>;
  inverSesion! : InversionistaGeneral;
  empSesion! : EmprendedorGeneral;

  solicitud! : Solicitud;
  solicitudes$! : Observable<Solicitud[]>;

  inversionSesion$! : Observable<Inversion[]>;

  negocioSesion! : Observable<NegocioEmprendedor>;

  constructor(private usuarioService: UsuarioService, private solicitudService: SolicitudService,
    private negocioService: NegocioService, private inversionService: InversionService){}

  ngOnInit(): void {
    try {
      this.id_negocio = parseInt(localStorage.getItem("negocio") ?? '0');
      let data = localStorage.getItem("usuario");
      let user = data ? JSON.parse(data) : null
      this.usuarioSession  = this.usuarioService.verificacion(user);
      let usuario = lastValueFrom(this.usuarioSession);

      usuario.then(user =>{
        if (user.tipo_usuario == 'inversionista') {

          let data = localStorage.getItem("inversionista");
          this.inverSesion = data ? JSON.parse(data) : null;
          this.tipo_usuario = false;
          this.cargarSolicitudesInv();

        } else if (user.tipo_usuario == 'emprendedor') {

          let data = localStorage.getItem("emprendedor");
          this.empSesion = data ? JSON.parse(data) : null;
          this.tipo_usuario = true;

          this.negocioSesion = this.negocioService.verNegocioInv(this.id_negocio);
          let negocio = lastValueFrom(this.negocioSesion);
          negocio.then(neg =>{
            if(neg.finalizado){
              this.cargarInversiones();
            }else{
              this.cargarSolicitudesEmp();
            }
          });
        }
      });
    } catch (error) {
    }
  }

  cargarInversiones(){
    console.log(this.id_negocio);
    this.inversionSesion$ = this.inversionService.cargarInversiones(this.id_negocio);
  }

  cargarSolicitudesInv(){
    this.solicitudes$ = this.solicitudService.cargarSolicitudes(this.inverSesion.id_inversionista, this.id_negocio);
  }

  cargarSolicitudesEmp(){
    this.solicitudes$ = this.solicitudService.cargarSolicitudesEmp(this.id_negocio);
  }

  @Output() verSoli = new EventEmitter<number>();
  verSol(id: number){
    this.verSoli.emit(id);
  }

  @Output() verInve = new EventEmitter<number>();
  verInv(id:number){
    this.verInve.emit(id);
  }

}
