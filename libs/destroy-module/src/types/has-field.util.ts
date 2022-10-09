import { isDefinedObject } from './defined-object.util';

export function hasField<K extends string>(key: K) {
  return function <T>(value: T): value is T & Record<K, any> {
    return isDefinedObject(value) && key in value;
  };
}
