import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NegocioService } from '../service/negocio.service';
import { NegocioInversionista } from '../interfaces/negocio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-negocio-inv',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './negocio-inv.component.html',
  styleUrl: './negocio-inv.component.css'
})
export class NegocioInvComponent implements OnInit{

  negocios$!: Observable<NegocioInversionista[]>;

  constructor(private negocioService: NegocioService){}

  ngOnInit(): void {
    this.negocios$ = this.negocioService.cargarNegociosInversionista();
  }

  @Output() verNeg = new EventEmitter<number>();

  verNegocio(id: number) {
    this.verNeg.emit(id);
  }
}
