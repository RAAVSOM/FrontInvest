import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { EmprendedorRegistro, PersonaRegister, UsuarioLogin, UsuarioRegister, tipo_documentoRegister } from '../interfaces/usuario';

@Component({
  selector: 'app-register-emp',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-emp.component.html',
  styleUrl: './register-emp.component.css',
})
export class RegisterEmpComponent {
  mensaje = '';
  userForm = new FormGroup({
    usuario: new FormControl(''),
    correo: new FormControl(''),
    clave: new FormControl(''),
    claveCon: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl(0),
    tipo_documento : new FormControl(''),
  });
  constructor(
    private route: Router,
    private usuarioService: UsuarioService,
  ) {}

  onSubmit() {
    if (
      this.userForm.value.usuario == '' ||
      this.userForm.value.clave == '' ||
      this.userForm.value.claveCon == '' ||
      this.userForm.value.correo == '' ||
      this.userForm.value.nombre == '' ||
      this.userForm.value.apellido == '' ||
      this.userForm.value.ciudad == '' ||
      this.userForm.value.telefono == 0 ||
      this.userForm.value.tipo_documento == ''
    ) {
      this.mensaje = 'Llene los campos';
    } else {
      if (this.userForm.value.clave == this.userForm.value.claveCon) {
        console.log(this.userForm.value.tipo_documento)
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
        let usuarioReg: UsuarioRegister = {
          usuario: this.userForm.value.usuario ?? '',
          clave: this.userForm.value.clave ?? '',
          correo: this.userForm.value.correo ?? '',
          persona: persona,
          tipo_usuario: 'emprendedor',
        };
        let emprendedor: EmprendedorRegistro = {
          usuario: usuarioReg,
        };
        let inv = this.usuarioService.registerEmp(emprendedor);
        this.mandarLogin();

      } else {
        this.mensaje = 'Las Contraseñas deben ser iguales';
      }
    }
  }

  mandarHome(): void {
    this.route.navigate(['home']);
  }

  mandarLogin(): void {
    this.route.navigate(['login']);
  }
}
