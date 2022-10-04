import { Route } from '@angular/router';
import { LoadedConfig } from './loaded-config.type';
import { PartialPickField } from './partial-pick.type';

export interface ExtendedRoute<T> extends Route {
  _loadedConfig: LoadedConfig<T>;
}

// eslint-disable-next-line quotes
export type PartialExtendedRoute<T> = PartialPickField<ExtendedRoute<T>, '_loadedConfig'>;
