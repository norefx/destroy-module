import { DestroyableModule } from './destroyable-module.type';

export interface LoadedConfig<T> {
  module: DestroyableModule<T>;
}
