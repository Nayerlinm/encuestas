import type { TComponent } from '../schemas';

export function renderTemplate(component: TComponent): void {
  // Reemplaza variables en el HTML
  let html = component.template;
  Object.entries(component.data).forEach(([key, value]) => {
    html = html.replace(`{{${key}}}`, String(value));
  });
  document.getElementById('app')!.innerHTML = html;
  component.init?.();
}
