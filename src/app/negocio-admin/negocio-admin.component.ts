import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NegocioInversionista } from '../interfaces/negocio';
import { Observable } from 'rxjs';
import { NegocioService } from '../service/negocio.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-negocio-admin',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './negocio-admin.component.html',
  styleUrl: './negocio-admin.component.css'
})
export class NegocioAdminComponent implements OnInit{
  negocios$! : Observable<NegocioInversionista[]> ;
  constructor(
    private negocioService: NegocioService
  ) {}

  ngOnInit(): void {
    this.negocios$ = this.negocioService.cargarNegociosAdmin();
  }

  @Output() verNeg = new EventEmitter<number>();

  verNegocio(id: number) {
    this.verNeg.emit(id);
  }

}
