import { Component, OnInit } from '@angular/core';
import { PerfilOpcionesComponent } from '../perfil-opciones/perfil-opciones.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { InversionistaCambio, InversionistaGeneral, InversionistaRegistro, PersonaRegister, UsuarioCambio, UsuarioRegister, tipo_documentoRegister } from '../interfaces/usuario';

@Component({
  selector: 'app-configuracion-personal',
  standalone: true,
  imports: [PerfilOpcionesComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './configuracion-personal.component.html',
  styleUrl: './configuracion-personal.component.css'
})
export class ConfiguracionPersonalComponent implements OnInit{
  id_inversionista = 0;

  userForm = new FormGroup({
    usuario: new FormControl(''),
    correo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl(0),
    tipo_documento : new FormControl(''),
  });

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    try{
      let data = localStorage.getItem("inversionista");
      let inversionista : InversionistaGeneral = data ? JSON.parse(data) : null;
      this.id_inversionista = inversionista.id_inversionista;
    }catch(error){

    }
  }

  guardarInfo(){
    let tipo_documento: tipo_documentoRegister = {
      nombre_tipo: this.userForm.value.tipo_documento ?? ''
    }
    let persona: PersonaRegister = {
      nombre_persona : this.userForm.value.nombre ?? '',
      apellido_persona : this.userForm.value.apellido ?? '',
      ciudad: this.userForm.value.ciudad ?? '',
      telefono: this.userForm.value.telefono ?? 0,
      tipo_documento: tipo_documento
    }
    let usuarioReg: UsuarioCambio = {
      usuario: this.userForm.value.usuario ?? '',
      correo: this.userForm.value.correo ?? '',
      persona: persona,
      tipo_usuario: 'emprendedor',
    };
    let inversionista : InversionistaCambio = {
      usuario: usuarioReg,
    };
    let sesion = this.usuarioService.actualizarInfo(inversionista, this.id_inversionista);
  }
}
