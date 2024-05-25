
//---------------para login---------------
export interface tipo_documento {
  id_tipodocumento: number;

  nombre_tipo: string;
}

export interface Persona {
  id_persona: number;
  nombre_persona : string;
  apellido_persona : string;
  ciudad: string;
  telefono: number;
  tipo_documento : tipo_documento;
}

export interface UsuarioGeneral {
  id_usuario: number;
  usuario: string;
  clave: string;
  correo: string;
  persona: Persona;
  tipo_usuario: string;
}

export interface InversionistaGeneral {
  id_inversionista: number;
  usuario: UsuarioGeneral;
  solicitudes: [],
  inversiones: []
}

export interface EmprendedorGeneral {
  id_emprendedor: number;
  usuario: UsuarioGeneral;
  negocios: [],
  inversiones: []
}


//-----------------para registros-------------------

export interface tipo_documentoRegister {
  nombre_tipo: string;
}

export interface PersonaRegister {
  nombre_persona : string;
  apellido_persona : string;
  ciudad: string;
  telefono: number;
  tipo_documento: tipo_documentoRegister
}

export interface UsuarioRegister {
  usuario: string;
  clave: string;
  correo: string;
  persona: PersonaRegister;
  tipo_usuario: string;
}

export interface InversionistaRegistro {
  usuario: UsuarioRegister;
}

export interface EmprendedorRegistro {
  usuario: UsuarioRegister;
}



//--------------usuario para hacer prueba de sesion--------------------
export interface UsuarioLogin {
  usuario: string;
  clave: string;
}

//--------------usuario para cambiar informacion -----------------------
export interface UsuarioCambio {
  usuario: string;
  correo: string;
  persona: PersonaRegister;
  tipo_usuario: string;
}

export interface InversionistaCambio {
  usuario: UsuarioCambio;
}







