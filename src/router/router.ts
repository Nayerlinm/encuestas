export type Route = {
 path: string;
 component: any; // TODO: Definir el tipo adecuado
 title?: string;
};

class Router {
 private routes: Route[];
 private currentPath: string;

 constructor(routes: Route[]) {
  this.routes = routes;
  this.currentPath = window.location.pathname;
  this.init();
 }

 //   private async loadTemplate(route: Route): Promise<string> {
 //     const response = await fetch(route.template);
 //     if (!response.ok) throw new Error(`Failed to load ${route.template}`);
 //     return await response.text();
 //   }

 //   private async renderRoute(): Promise<void> {
 //     const route = this.routes.find((r) => r.path === this.currentPath);
 //     if (!route) {
 //       console.error("Route not found");
 //       return;
 //     }

 //     const template = await this.loadTemplate(route);
 //     document.getElementById("app")!.innerHTML = template;
 //     if (route.title) document.title = route.title;
 //   }

 private renderRoute(): void {
  const route = this.routes.find(r => r.path === this.currentPath);
  if (!route) {
   console.error('Route not found');
   return;
  }

  // Renderiza el componente y actualiza el título
  route.component.render();
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
