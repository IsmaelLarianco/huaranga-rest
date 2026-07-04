export interface InfoRestaurante {
  nombre: string;
  eslogan: string;
  mision:string;
  vision:string;
  valores: Valor[];
}

export interface Valor {
  titulo: string;
  descripcion: string;
}