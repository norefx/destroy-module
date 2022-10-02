import { noop } from '../utils/noop';
import { isDestroyableModule } from './destroyable-module.util';

describe(`isDestroyableModule`, () => {
  tests();
});

function tests(): void {
  it(`isDestroyableModule type guard`, () => {
    expect(isDestroyableModule(null)).toBeFalsy();
    expect(isDestroyableModule(undefined)).toBeFalsy();
    expect(isDestroyableModule({})).toBeFalsy();
    expect(isDestroyableModule({ destroy: {} })).toBeFalsy();
    expect(isDestroyableModule({ destroy: noop })).toBeTruthy();
  });
}
