import { z } from 'zod';
import { componentSchema } from './component.schema';

export const routeSchema = z.object({
  path: z.string(),
  title: z.string(),
  component: componentSchema,
});

export type TRoute = z.infer<typeof routeSchema>;
