import { z } from 'zod';

export const preguntaSchema = z.object({
  id: z.number().int(),
  titulo: z.string().min(1, 'El título es obligatorio'),
  estatus: z.boolean().default(true),
  createAt: z.date().or(z.string().datetime()),
  updateAt: z.date().or(z.string().datetime()).optional(),
});

export type TPregunta = z.infer<typeof preguntaSchema>;
