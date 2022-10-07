import { isDestroyableModule } from './destroyable-module.util';
import { hasField } from './has-field.util';
import { LoadedConfig } from './loaded-config.type';

export function isLoadedConfig<T>(value: unknown): value is LoadedConfig<T> {
  return hasField(`module`)(value) && isDestroyableModule(value.module);
}
