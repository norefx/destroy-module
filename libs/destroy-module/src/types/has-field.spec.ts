import { hasField } from './has-field.util';

const FIELD_NAME = `test`;

describe(`hasField`, () => {
  tests();
});

function tests(): void {
  it(`hasField type guard test field`, () => {
    expect(hasField(FIELD_NAME)({ [`_${FIELD_NAME}`]: undefined })).toBeFalsy();
    expect(hasField(FIELD_NAME)({ [`_${FIELD_NAME}`]: null })).toBeFalsy();
    expect(hasField(FIELD_NAME)({ [`_${FIELD_NAME}`]: {} })).toBeFalsy();
    expect(hasField(FIELD_NAME)({ [FIELD_NAME]: undefined })).toBeTruthy();
    expect(hasField(FIELD_NAME)({ [FIELD_NAME]: null })).toBeTruthy();
    expect(hasField(FIELD_NAME)({ [FIELD_NAME]: {} })).toBeTruthy();
  });
}
