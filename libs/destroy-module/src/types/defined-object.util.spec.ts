import { noop } from '../utils/noop';
import { isDefinedObject } from './defined-object.util';

describe(`isDefinedObject`, () => {
  tests();
});

function tests(): void {
  it(`isDefinedObject type guard`, () => {
    expect(isDefinedObject(true)).toBeFalsy();
    expect(isDefinedObject(``)).toBeFalsy();
    expect(isDefinedObject(1)).toBeFalsy();
    expect(isDefinedObject({})).toBeTruthy();
    expect(isDefinedObject([])).toBeTruthy();
    expect(isDefinedObject(noop)).toBeTruthy();
  });
}
