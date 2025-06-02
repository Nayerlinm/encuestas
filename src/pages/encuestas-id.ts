import type { TComponent } from '../schemas';
import { renderTemplate } from '../utils';

export const EncuestasId: TComponent = {
  template: function (this) {
    return `
      <h1>Test de Desarrollo Web</h1>
    <section id="Test">
        <div class="contenedor-pregunta" id="0">
            <h2> 1 - ¿Que lenguaje de marcado se utiliza para estructurar el contenido de una pagina web?</h2>
            <div class="opciones">
                <label for="" id="l00">
                    <input type="radio" name="p0" onclick="seleccionar(0,0)">
                    <span>javaScript</span>
                    <span id="p00"></span>
                </label>
                <label for="" id="l01">
                    <input type="radio" name="p0" onclick="seleccionar(0,1)">
                    <span>CSS</span>
                    <span id="p01"></span>
                </label>
                <label for="" id="l02">
                    <input type="radio" name="p0" onclick="seleccionar(0,2)">
                    <span>HTML</span>
                    <span id="p02"></span>
                </label>
            </div>
             </div>
        <div class="contenedor-pregunta" id="1">
            <h3> 2 - ¿Cual de las siguientes tecnologias se utiliza principalmente para el diseño y el estilo del sitio web?</h3>
            <div class="opciones">
                <label for="" id="l00">
                    <input type="radio" name="p0" onclick="seleccionar(0,0)">
                    <span>Java</span>
                    <span id="p00"></span>
                </label>
                <label for="" id="l01">
                    <input type="radio" name="p0" onclick="seleccionar(0,1)">
                    <span>XML</span>
                    <span id="p01"></span>
                </label>
                <label for="" id="l02">
                    <input type="radio" name="p0" onclick="seleccionar(0,2)">
                    <span>CSS</span>
                    <span id="p02"></span>
                </label>
            </div>
             </div>     
    </section>
    <button id="corregir">corregir</button>
  `;
  },
  data: {
      // name: 'Usuario',
        //counter: 0,
  },
  init: () => {
    // Lógica del componente (ej: eventos)
    document.getElementById('increment-btn')?.addEventListener('click', () => {
      if (!EncuestasId.data) return  
        EncuestasId.data.counter++;
      EncuestasId.render?.(); // Vuelve a renderizar
    });
  },
  render: () => renderTemplate(EncuestasId),
};
