import './style.css';
import './components';
import Router from './router/router';
import type { TRoute } from './schemas/router.schema';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Encuestas } from './pages/encuestas';

const routes: TRoute[] = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/about', component: About, title: 'About' },
  { path: '/contact', component: Home, title: 'Contact' },
  { path: '/encuestas', component: Encuestas, title: 'Encuestas' },
];

const router = new Router(routes);

// Navegación global (evita recargas)
document.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  if (target.matches('[data-link]')) {
    e.preventDefault();
    const href = target.getAttribute('href');
    if (href) router.navigateTo(href);
  }
});
