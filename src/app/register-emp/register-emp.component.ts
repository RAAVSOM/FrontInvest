import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioLogin } from '../interfaces/usuario';

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
    clave: new FormControl(''),
  });
  constructor(
    private route: Router,
    private usuarioService: UsuarioService,
  ) {}

  onSubmit() {
    /*let usuarioLog: UsuarioLogin = {
      usuario: this.userForm.value.usuario ?? '',
      clave: this.userForm.value.clave ?? '',
    };
    let user = this.usuarioService.verificacion(usuarioLog);
    if (user.id_usuario == 0) {
      this.mensaje = 'Usuario o Contraseña incorrecta';
    }*/
  }

  mandarHome(): void {
    this.route.navigate(['home']);
  }

  mandarAdmin(): void {
    this.route.navigate(['admin']);
  }
}
