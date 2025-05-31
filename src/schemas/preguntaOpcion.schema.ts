import { z } from 'zod';

export const preguntaOpcionSchema = z.object({
  id_opcion: z.number().int(),
  id_pregunta: z.number().int(),
});

export type TPreguntaOpcion = z.infer<typeof preguntaOpcionSchema>;
