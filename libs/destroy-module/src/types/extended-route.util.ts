import { ExtendedRoute } from './extended-route.type';
import { hasField } from './has-field.util';
import { isLoadedConfig } from './loaded-config.util';

export function isExtendedRoute<T>(value: unknown): value is ExtendedRoute<T> {
  return hasField(`_loadedConfig`)(value) && isLoadedConfig(value._loadedConfig);
}
