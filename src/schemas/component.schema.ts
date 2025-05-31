import { z } from 'zod';

export const componentSchema = z.object({
  init: z.function(),
  render: z.function(),
  template: z.string(),
  data: z.record(z.any()),
});

export type TComponent = z.infer<typeof componentSchema>;
