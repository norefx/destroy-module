import { isDefinedObject } from './defined-object.util';
import { isDestroyableModule } from './destroyable-module.util';
import { LoadedConfig } from './loaded-config.type';

export function isLoadedConfig<T>(value: unknown): value is LoadedConfig<T> {
  return isDefinedObject(value) && `module` in value && isDestroyableModule(value.module);
}
