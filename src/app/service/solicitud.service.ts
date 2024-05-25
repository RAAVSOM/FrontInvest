import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud, SolicitudRegistro } from '../interfaces/solicitud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  API_URL = 'http://localhost:9998/';
  constructor(private http: HttpClient) {}

  //----------------inversionista-----------------
  cargarSolicitudes(id_I:number, id_N:number): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.API_URL+'solicitud/cargarsolicitud/'+id_I+'/'+id_N);
  }

  crearSolicitud(solicitud: SolicitudRegistro, id_I:number, id_N:number): Observable<string>{
    return this.http.post<string>(this.API_URL+'solicitud/solicitudAgregar/'+id_I+'/'+id_N, solicitud);
  }

  //----------------emprendedor--------------------
  cargarSolicitudesEmp(id: number): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.API_URL+'solicitud/cargarsolicitudn/'+id);
  }

  verSolicitud(id: number){
    return this.http.get<Solicitud>(this.API_URL+'solicitud/versolicitude/'+id);
  }

  aceptarSolicitud(id_N:number, id_I:number, id_E:number, id_S: number){
    return this.http.post(this.API_URL + 'inversion/aceptarSolicitud/' + id_N+'/'+id_I+'/'+id_E+'/'+id_S, null);
  }

  cerrarSubasta(id:number): Observable<string>{
    return this.http.put<string>(this.API_URL + 'negocio/cerrar/'+ id, null);
  }
}
