import { isDefinedObject } from './defined-object.util';

describe(`isDestroyableModule`, () => {
  tests();
});

function tests(): void {
  it(`isDefinedObject type guard`, () => {
    expect(isDefinedObject(null)).toBeFalsy();
    expect(isDefinedObject(undefined)).toBeFalsy();
    expect(isDefinedObject({})).toBeTruthy();
  });
}
