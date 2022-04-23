export type Cordenadas = [number, number];

export interface Negocio {
  nombre: string;
  color: string;
}

export interface Servicios {
  id: number;
  cod: string;
  destino: string;
  orden: number;
  color: string;
  negocio: Negocio;
  recorrido: { recorrido: string };
  codigo: string;
}

export interface Stop {
  stopId: number;
  stopCoordenadaX: string;
  stopCoordenadaY: string;
  eje: string;
  codSimt: string;
  distancia: number;
}

export interface Paradero {
  id: number;
  cod: string;
  num: number;
  pos: Cordenadas;
  name: string;
  comuna: string;
  type: 0;
  servicios: Servicios[];
  stop: Stop;
}
