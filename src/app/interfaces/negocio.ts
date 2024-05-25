import { EmprendedorGeneral } from "./usuario";

export interface NegocioRegister{
  aprobado: boolean;
  finalizado: boolean;
  titulo: string;
  descripcion: string;
  lugar: string;
  tipo_negocio: string;
}

export interface NegocioInversionista{
  id_negocio: number;
  aprobado: boolean;
  finalizado: boolean;
  titulo: string;
  descripcion: string;
  lugar: string;
  tipo_negocio: string;
  emprendedor: EmprendedorGeneral;
  solicitudes: []
}

export interface NegocioEmprendedor{
  id_negocio: number;
  aprobado: boolean;
  finalizado: boolean;
  titulo: string;
  descripcion: string;
  lugar: string;
  tipo_negocio: string;
  emprendedor: EmprendedorGeneral;
  solicitudes: []
}

export interface NegocioGeneral{
  aprobado: boolean;
  finalizado: boolean;
  titulo: string;
  descripcion: string;
  lugar: string;
  tipo_negocio: string;
  emprendedor: EmprendedorGeneral;
  solicitudes: [];
}
