import { ExtendedRoute } from './extended-route.type';
import { hasField } from './has-field.util';

export function isExtendedRoute<T>(value: unknown): value is ExtendedRoute<T> {
  return hasField(`_loadedInjector`)(value) && hasField(`_loadedRoutes`)(value);
}
