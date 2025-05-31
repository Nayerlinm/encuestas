// src/pages/about.ts
export const About = {
 template: `
    <h1>Sobre Nosotros</h1>
    <p>Creado por {{author}} en {{year}}.</p>
  `,
 data: {
  author: 'Tu Nombre',
  year: new Date().getFullYear(),
 },
 render: () => {
  let html = About.template;
  Object.entries(About.data).forEach(([key, value]) => {
   html = html.replace(`{{${key}}}`, String(value));
  });
  document.getElementById('app')!.innerHTML = html;
 },
};
