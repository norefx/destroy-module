export function isDefinedObject(value: unknown): value is NonNullable<Record<string, unknown>> {
  return !!value && value instanceof Object;
}
