import { isDefinedObject } from './defined-object.util';
import { ExtendedRoute } from './extended-route.type';
import { isLoadedConfig } from './loaded-config.util';

export function isExtendedRoute<T>(value: unknown): value is ExtendedRoute<T> {
  return isDefinedObject(value) && `_loadedConfig` in value && isLoadedConfig(value._loadedConfig);
}
