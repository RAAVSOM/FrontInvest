import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Inversionista,
  UsuarioLogin,
  UsuarioRegister,
} from '../interfaces/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  mensaje = '';
  userForm = new FormGroup({
    usuario: new FormControl(''),
    correo: new FormControl(''),
    clave: new FormControl(''),
    claveCon: new FormControl(''),
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
      this.userForm.value.correo == ''
    ) {
      this.mensaje = 'Llene los campos';
    } else {
      if (this.userForm.value.clave == this.userForm.value.claveCon) {
        let usuarioReg: UsuarioRegister = {
          usuario: this.userForm.value.usuario ?? '',
          correo: this.userForm.value.correo ?? '',
          clave: this.userForm.value.clave ?? '',
          tipo_usuario: 'inversionista',
        };
        let inversionista: Inversionista = {
          usuario: usuarioReg,
        };
        let user = this.usuarioService.registerInv(usuarioReg);
        console.log(user);
      } else {
        this.mensaje = 'Las Contraseñas deben ser iguales';
      }
    }
  }

  mandarHome(): void {
    this.route.navigate(['home']);
  }
}
