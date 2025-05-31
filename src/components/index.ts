import type { TComponent } from '../schemas';
import { Navbar } from './layout/navbar';

const componentsToRender: TComponent[] = [Navbar];

componentsToRender.forEach(component => {
  component.render();
});
