import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userForm = this.formBuilder.group({
    usuario: [''],
    clave: [''],
  });
  constructor(
    private route: Router,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit() {
    let user = this.userForm.valid;
    console.log(user);
  }

  ngOnInit(): void {}

  mandarHome(): void {
    this.route.navigate(['home']);
  }
}
