import { Route } from '@angular/router';
import { DestroyableModule } from './destroyable-module.type';

export interface ExtendedRoute<T> extends Route {
  _loadedInjector?: DestroyableModule<T>;
  _loadedRoutes?: Route[];
}
