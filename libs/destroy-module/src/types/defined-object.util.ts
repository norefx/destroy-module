import { isDestroyableModule } from './destroyable-module.util';
import { LoadedConfig } from './loaded-config.type';

export function isDefinedObject<T>(value: any): value is Object {
  return !!value && value instanceof Object;
}
