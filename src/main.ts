import './style.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import Router from './router/router';
import type { TRoute } from './schemas/router.schema';

const routes: TRoute[] = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/about', component: About, title: 'About' },
  { path: '/contact', component: Home, title: 'Contact' },
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
