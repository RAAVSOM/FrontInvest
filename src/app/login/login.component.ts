import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioLogin } from './../interfaces/usuario';
import { SessionService } from '../session.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  mensaje = '';
  userForm = new FormGroup({
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });
  constructor(
    private route: Router,
    private usuarioService: UsuarioService,
    private session: SessionService,
  ) {}

  onSubmit() {
    let usuarioLog: UsuarioLogin = {
      usuario: this.userForm.value.usuario ?? '',
      clave: this.userForm.value.clave ?? '',
    };
    let sesion = this.usuarioService.verificacion(usuarioLog);
    let user = lastValueFrom(sesion)
    user.then(user =>{
      console.log(user.id_usuario);
      if (user.id_usuario == 0) {
        this.mensaje = 'Usuario o Contraseña incorrecta';
      } else {
        if (user.tipo_usuario == 'inversionista') {
          let sesion = this.usuarioService.buscarInversionista(user.id_usuario);
          let inv = lastValueFrom(sesion);
          inv.then(inv =>{
            console.log(inv);
            this.session.setUsuarioSesion(user);
            this.session.setInversionista(inv);
            this.mandarInver();
          });
        } else if (user.tipo_usuario == 'emprendedor') {
          let sesion = this.usuarioService.buscarEmprendedor(user.id_usuario);
          let emp = lastValueFrom(sesion);
          emp.then(emp =>{
            console.log(emp);
            this.session.setEmprendedor(emp);
            this.session.setUsuarioSesion(user);
            this.mandarEmp();
          });
        } else if (user.tipo_usuario == 'administrador') {
          this.mandarAdmin();
        }
      }
    });
  }

  mandarHome(): void {
    this.route.navigate(['home']);
  }

  mandarInver(): void {
    this.route.navigate(['inversionista']);
  }

  mandarEmp(): void {
    this.route.navigate(['emprendedor']);
  }

  mandarAdmin(): void {
    this.route.navigate(['admin']);
  }
}
