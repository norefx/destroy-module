export function isNonNullable<T>(value: T): value is T {
  return value != null;
}
