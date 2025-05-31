import { mockEncuentas } from '../mock/encuestas';
import type { TComponent, TEncuesta } from '../schemas';
import { renderTemplate } from '../utils';

export const Encuestas: TComponent = {
  template: function (this) {
    return `
    <h1>Encuestas</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis. Esse velit numquam laudantium beatae ducimus facere, quod ex sapiente?</p>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Fecha de creación</th>
          <th>Fecha de actualización</th>
        </tr>
      </thead>
      <tbody>
         ${this.data.encuestas
           .map(
             (encuesta: TEncuesta) => `
          <tr data-id="${encuesta.id}">
            <td>${encuesta.titulo}</td>
            <td>${encuesta.descripcion}</td>
            <td>${encuesta.createAt}</td>
            <td>${encuesta.updateAt}</td>
          </tr>
        `,
           )
           .join('')}
      </tbody>
    </table>
  `;
  },
  data: {
    encuestas: mockEncuentas,
  },
  init: function (this) {},
  render: () => renderTemplate(Encuestas),
};
