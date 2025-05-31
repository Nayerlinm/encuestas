import { z } from 'zod';

export const encuestaSchema = z.object({
  id: z.number().int(),
  titulo: z.string().min(1, 'El título es obligatorio'),
  descripcion: z.string().optional(),
  puntaje_maximo: z.number().positive('El puntaje debe ser positivo'),
  estatus: z.boolean().default(true),
  createAt: z.date().or(z.string().datetime()),
  updateAt: z.date().or(z.string().datetime()).optional(),
});

export type TEncuesta = z.infer<typeof encuestaSchema>;
