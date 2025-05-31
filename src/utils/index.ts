import type { TComponent } from '../schemas';

export function renderTemplate(component: TComponent, customId?: string): void {
  const id = customId || 'app';
  let html = String(component.template?.());

  Object.entries(component.data).forEach(([key, value]) => {
    html = html.replace(`{{${key}}}`, String(value));
  });

  const DOC = document.getElementById(id);

  if (!DOC) return;

  DOC.innerHTML = html;

  component.init?.();
}
