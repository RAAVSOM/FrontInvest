export interface Persona {}

export interface UsuarioGeneral {
  id_usuario: number;
  usuario: string;
  clave: string;
  correo: string;
  persona: Persona;
  tipo_usuario: string;
}

export interface UsuarioLogin {
  usuario: string;
  clave: string;
}

export interface UsuarioRegister {
  usuario: string;
  clave: string;
  correo: string;
  tipo_usuario: string;
}

export interface Inversionista {
  usuario: UsuarioGeneral;
}

export interface InversionistaGeneral {
  id_inversionista: number;
  usuario: UsuarioGeneral;
}
