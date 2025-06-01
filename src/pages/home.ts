import type { TComponent } from '../schemas';
import { renderTemplate } from '../utils';

export const Home: TComponent = {
  template: function (this) {
    return `
    <h1>Bienvenido, {{name}}!</h1>
    <p>Estás en la página Home. Visitas: {{counter}}</p>
    <button class="btn btn-primary" id="increment-btn">Incrementar</button>
  `;
  },
  data: {
    name: 'Usuario',
    counter: 0,
  },
  init: () => {
    // Lógica del componente (ej: eventos)
    document.getElementById('increment-btn')?.addEventListener('click', () => {
      if (!Home.data) return;
      Home.data.counter++;
      Home.render?.(); // Vuelve a renderizar
    });
  },
  render: () => renderTemplate(Home),
};
