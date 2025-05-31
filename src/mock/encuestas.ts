import type { TEncuesta } from '../schemas';

export const mockEncuentas: TEncuesta[] = [
  {
    id: 1,
    estatus: true,
    puntaje_maximo: 10,
    titulo: 'Encuesta 1',
    descripcion: 'Descripción de la encuesta 1',
    createAt: new Date(),
    updateAt: new Date(),
  },
  {
    id: 2,
    estatus: true,
    puntaje_maximo: 10,
    titulo: 'Encuesta 2',
    descripcion: 'Descripción de la encuesta 2',
    createAt: new Date(),
    updateAt: new Date(),
  },
  {
    id: 3,
    estatus: true,
    puntaje_maximo: 10,
    titulo: 'Encuesta 3',
    descripcion: 'Descripción de la encuesta 3',
    createAt: new Date(),
    updateAt: new Date(),
  },
];
