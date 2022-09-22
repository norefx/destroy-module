export function isDefinedObject<T>(value: any): value is Object {
  return !!value && value instanceof Object;
}
