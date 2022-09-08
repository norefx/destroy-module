import { isDefinedObject } from './defined-object.util';
import { DestroyableModule } from './destroyable-module.type';

export function isDestroyableModule<T>(value: any): value is DestroyableModule<T> {
  return isDefinedObject(value) && `destroy` in value && value.destroy instanceof Function;
}
