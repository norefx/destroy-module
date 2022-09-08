import { Route } from '@angular/router';
import { LoadedConfig } from './loaded-config.type';

export interface ExtendedRoute<T> extends Route {
  _loadedConfig: LoadedConfig<T>;
}
