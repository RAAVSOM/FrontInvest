import { NegocioGeneral } from "./negocio";
import { Solicitud } from "./solicitud";
import { EmprendedorGeneral, InversionistaGeneral } from "./usuario";

export interface Inversion {
  id_inversion: number;
  inversionista: InversionistaGeneral;
  solicitud: Solicitud;
  negocio: NegocioGeneral;
  emprendedor: EmprendedorGeneral;
}
