import { noop } from '../utils/noop';
import { isNonNullable } from './is-non-nullable.util';

describe(`isNonNullable`, () => {
  tests();
});

function tests(): void {
  it(`isNonNullable type guard`, () => {
    expect(isNonNullable(null)).toBeFalsy();
    expect(isNonNullable(undefined)).toBeFalsy();
    expect(isNonNullable(false)).toBeTruthy();
    expect(isNonNullable(0)).toBeTruthy();
    expect(isNonNullable(``)).toBeTruthy();
    expect(isNonNullable({})).toBeTruthy();
    expect(isNonNullable([])).toBeTruthy();
    expect(isNonNullable(noop)).toBeTruthy();
  });
}
