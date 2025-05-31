import { z } from 'zod';

export const encuestaPreguntaSchema = z.object({
  id_encuesta: z.number().int(),
  id_pregunta: z.number().int(),
});
