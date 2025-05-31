import type { TComponent } from '../schemas';
import { renderTemplate } from '../utils';

export const About: TComponent = {
  template: function (this) {
    return `
    <h1>Sobre Nosotros</h1>
    <p>Creado por {{author}} en {{year}}.</p>
  `;
  },
  data: {
    author: 'Tu Nombre',
    year: new Date().getFullYear(),
  },
  init: () => {},
  render: () => renderTemplate(About),
};
