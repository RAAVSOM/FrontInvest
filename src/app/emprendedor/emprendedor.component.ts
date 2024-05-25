import { EmprendedorGeneral, InversionistaGeneral } from './../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilOpcionesComponent } from '../perfil-opciones/perfil-opciones.component';
import { SessionService } from '../session.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NegocioRegister } from '../interfaces/negocio';
import { NegocioService } from '../service/negocio.service';
import { lastValueFrom } from 'rxjs';
import { NegocioEmpComponent } from '../negocio-emp/negocio-emp.component';

@Component({
  selector: 'app-emprendedor',
  standalone: true,
  imports: [PerfilOpcionesComponent,FormsModule, ReactiveFormsModule, NegocioEmpComponent],
  templateUrl: './emprendedor.component.html',
  styleUrl: './emprendedor.component.css',
})
export class EmprendedorComponent implements OnInit {
  mensaje = '';
  negocioForm = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    tipo_negocio: new FormControl(''),
    lugar: new FormControl(''),
  });

  constructor(
    private route: Router,
    private session: SessionService,
    private negocioService: NegocioService
  ) {}

  ngOnInit(): void {
    let data = localStorage.getItem("emprendedor");
    this.session.setEmprendedor(data ? JSON.parse(data) : null);
  }

  crearNegocio(){
    let negocio: NegocioRegister = {
      aprobado: false,
      finalizado: false,
      titulo: this.negocioForm.value.titulo ?? '',
      descripcion: this.negocioForm.value.descripcion ?? '',
      lugar: this.negocioForm.value.lugar ?? '',
      tipo_negocio: this.negocioForm.value.tipo_negocio ?? ''
    }

    let sesion = this.negocioService.crearNegocio(negocio, this.session.emprendedorSesion?.id_emprendedor ?? 0);
    let neg = lastValueFrom(sesion);
    neg.then(negocio =>{
      console.log(negocio);
      this.mensaje = "Negocio creado exitosamente";
    });
  }

  mandarHome(): void {
    this.session.cerrarSesion();
    this.route.navigate(['home']);
  }

}
