import { insertData, renderTemplate } from '../utils';
import { mockEncuentas } from '../mock/encuestas';
import type { TComponent, TEncuesta } from '../schemas';
import EncuestaLayout from '../components/encuesta/encuesta-layout.html?raw';
import EncuestaCard from '../components/encuesta/encuesta-card.html?raw';

export const Encuestas: TComponent = {
  template: function (this) {
    return EncuestaLayout;
  },
  init: function (this) {
    let cardsContainer = document.getElementById('encuestas-cards');
    if (!cardsContainer) return `<h1>No se encontraron encuestas</h1>`;

    // Render cards
    cardsContainer.innerHTML = mockEncuentas
      .map((encuesta: TEncuesta) => insertData<TEncuesta>(EncuestaCard, encuesta))
      .join('');
  },
  render: () => renderTemplate(Encuestas),
};
