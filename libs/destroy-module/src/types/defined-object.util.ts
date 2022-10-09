import { isNonNullable } from './is-non-nullable.util';

export function isDefinedObject<T extends object>(value: any): value is T {
  return isNonNullable(value) && value instanceof Object;
}
