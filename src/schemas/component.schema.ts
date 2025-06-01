import { z } from 'zod';

export const componentSchema = z.object({
  init: z.function(),
  render: z.function(),
  template: z.function(),
  data: z.record(z.any()).optional(),
});

export type TComponent = z.infer<typeof componentSchema>;
