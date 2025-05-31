import { z } from 'zod';

export const usuarioSchema = z.object({
  id: z.number().int(),
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  apellido: z.string().optional(),
  email: z.string().email('Email inválido').min(1, 'El email es obligatorio'),
  estatus: z.boolean().default(true),
  createAt: z.date().or(z.string().datetime()),
  updateAt: z.date().or(z.string().datetime()).optional(),
});

export type TUsuario = z.infer<typeof usuarioSchema>;
