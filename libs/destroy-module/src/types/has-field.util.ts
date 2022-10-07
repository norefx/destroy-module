import { isDefinedObject } from './defined-object.util';

export function hasField<K extends string | number | symbol>(key: K) {
  return function <T>(value: T): value is T & Record<K, unknown> {
    return isDefinedObject(value) && key in value;
  };
}
