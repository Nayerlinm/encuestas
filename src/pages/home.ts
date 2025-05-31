// src/pages/home.ts
export const Home = {
 template: `
    <h1>Bienvenido, {{name}}!</h1>
    <p>Estás en la página Home. Visitas: {{counter}}</p>
    <button id="increment-btn">Incrementar</button>
  `,
 data: {
  name: 'Usuario',
  counter: 0,
 },
 init: () => {
  // Lógica del componente (ej: eventos)
  document.getElementById('increment-btn')?.addEventListener('click', () => {
   Home.data.counter++;
   Home.render(); // Vuelve a renderizar
  });
 },
 render: () => {
  // Reemplaza variables en el HTML
  let html = Home.template;
  Object.entries(Home.data).forEach(([key, value]) => {
   html = html.replace(`{{${key}}}`, String(value));
  });
  document.getElementById('app')!.innerHTML = html;
  Home.init(); // Inicia eventos
 },
};
