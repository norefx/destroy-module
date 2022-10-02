export function isDefinedObject(value: any): value is NonNullable<Record<string, unknown>> {
  return !!value && value instanceof Object;
}
