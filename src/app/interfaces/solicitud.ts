import { NegocioGeneral } from "./negocio";
import { InversionistaGeneral } from "./usuario";

export interface Solicitud{
  id_solicitud: number;
  valor_solicitud: number;
  porcentaje_rentabilidad: number;
  porcentaje_liquidez: number;
  nivel_riezgotolerado: number;

  inversionista: InversionistaGeneral;

  negocio: NegocioGeneral;
}

export interface SolicitudRegistro{
  valor_solicitud: number;
  porcentaje_rentabilidad: number;
  porcentaje_liquidez: number;
  nivel_riezgotolerado: number;
}
