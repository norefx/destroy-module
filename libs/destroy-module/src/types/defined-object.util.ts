import { isNonNullable } from './is-non-nullable.util';

export function isDefinedObject<T extends object>(value: unknown): value is NonNullable<T> {
  return isNonNullable(value) && value instanceof Object;
}
