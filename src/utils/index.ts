import type { TComponent } from '../schemas';

export function renderTemplate(component: TComponent, customId?: string): void {
  const id = customId || 'app';
  let html = String(component.template?.());

  Object.entries(component?.data || {}).forEach(([key, value]) => {
    html = html.replace(`{{${key}}}`, String(value));
  });

  const DOC = document.getElementById(id);

  if (!DOC) return;

  DOC.innerHTML = html;

  component.init?.();
}

export const loadTemplate = async (path: string): Promise<string> => {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load template: ${path}`);
  return await response.text();
};

export function insertData<T>(template: string, data: Partial<Record<keyof T, unknown>>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key as keyof T] as string);
}
