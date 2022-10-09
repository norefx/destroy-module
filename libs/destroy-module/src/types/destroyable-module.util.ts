import { DestroyableModule } from './destroyable-module.type';
import { hasField } from './has-field.util';

export function isDestroyableModule<T>(value: any): value is DestroyableModule<T> {
  return hasField(`destroy`)(value) && value.destroy instanceof Function;
}
