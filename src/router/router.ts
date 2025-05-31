import { renderTemplate } from '../utils';
import type { TRoute } from '../schemas/router.schema';

class Router {
  private routes: TRoute[];
  private currentPath: string;

  constructor(routes: TRoute[]) {
    this.routes = routes;
    this.currentPath = window.location.pathname;
    this.init();
  }

  private renderRoute(): void {
    const route = this.routes.find(r => r.path === this.currentPath);
    if (!route) {
      console.error('Route not found');
      return;
    }

    // Renderiza el componente y actualiza el título
    renderTemplate(route.component);

    if (route.title) document.title = route.title;
  }

  private init(): void {
    // Manejar cambios de ruta (popstate para History API)
    window.addEventListener('popstate', () => {
      this.currentPath = window.location.pathname;
      this.renderRoute();
    });

    // Renderizar la ruta inicial
    this.renderRoute();
  }

  public navigateTo(path: string): void {
    this.currentPath = path;
    window.history.pushState({}, '', path);
    this.renderRoute();
  }
}

export default Router;
