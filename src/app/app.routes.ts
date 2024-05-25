import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { AdminComponent } from './admin/admin.component';
import { InversionistaComponent } from './inversionista/inversionista.component';
import { EmprendedorComponent } from './emprendedor/emprendedor.component';
import { SubastaComponent } from './subasta/subasta.component';
import { ConfiguracionPersonalComponent } from './configuracion-personal/configuracion-personal.component';

export const routes: Routes = [
  { path: 'confi', component: ConfiguracionPersonalComponent },
  { path: 'suba', component: SubastaComponent },
  { path: 'emprendedor', component: EmprendedorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inversionista', component: InversionistaComponent },
  { path: 'register-emp', component: RegisterEmpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
