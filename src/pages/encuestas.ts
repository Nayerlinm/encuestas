import { mockEncuentas } from '../mock/encuestas';
import type { TComponent, TEncuesta } from '../schemas';
import { renderTemplate } from '../utils';

export const Encuestas: TComponent = {
  template: function (this) {
    return `
    <div class="container">
    <h1>Encuestas</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis. Esse velit numquam laudantium beatae ducimus facere, quod ex sapiente?</p>

      <div class="row gap-2">
         ${this.data.encuestas
           .map(
             (encuesta: TEncuesta) => `
          <div class="card col-3">
  <div class="card-body">
    <h5 class="card-title">${encuesta.titulo}</h5>
    <p class="card-text">${encuesta.descripcion}</p>
    <a href="/encuestas/${encuesta.id}" class="btn btn-primary">Ver</a>
  </div>
</div>
        `,
           )
           .join('')}
      </div>
      </div>
  `;
  },
  data: {
    encuestas: mockEncuentas,
  },
  init: function (this) {},
  render: () => renderTemplate(Encuestas),
};
