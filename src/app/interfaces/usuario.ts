export interface UsuarioGeneral{
  id_usuario: number;
  usuario: string;
  clave: string;
  correo: string;
  persona: number;
  tipo_usuario: string;
}

export interface UsuarioLogin{
  usuario: string;
  clave: string;
}
