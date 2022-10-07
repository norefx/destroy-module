import { TestBed, waitForAsync } from '@angular/core/testing';
import { isDefinedObject } from '../types/defined-object.util';
import { RouteWithConfig, RouteWithExtendedConfig } from '../types/route-with-config.type';
import { noop } from '../utils/noop';
import { DestroyModuleGuard } from './destroy-module.guard';

let guard: DestroyModuleGuard<unknown>;

describe(`DestroyModuleGuard`, () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ providers: [DestroyModuleGuard] })
      .compileComponents()
      .then(noop);
  }));
  beforeEach(() => {
    guard = TestBed.get(DestroyModuleGuard);
  });

  tests();
});

function tests(): void {
  let isDestroyExecuted = false;
  const destroyFn = () => {
    isDestroyExecuted = true;
  };

  beforeEach(() => {
    isDestroyExecuted = false;
  });

  it(`should allow module redirect`, () => {
    const activatedRouteSnapshot: RouteWithExtendedConfig<unknown> = {
      routeConfig: { _loadedConfig: { module: { destroy: destroyFn } } },
    };
    const result = guard.canDeactivate(null, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    expect(activatedRouteSnapshot.routeConfig._loadedConfig).toBeUndefined();
    expect(isDestroyExecuted).toBeTruthy();
  });

  it(`should allow module redirect with empty loaded config`, () => {
    const activatedRouteSnapshot: RouteWithConfig = { routeConfig: {} };
    const result = guard.canDeactivate(null, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    if (isDefinedObject(activatedRouteSnapshot.routeConfig)) {
      expect(`_loadedConfig` in activatedRouteSnapshot.routeConfig).toBeFalsy();
    }
    expect(isDestroyExecuted).toBeFalsy();
  });

  it(`should allow component redirect`, () => {
    const activatedRouteSnapshot: RouteWithExtendedConfig<unknown> = {
      routeConfig: { _loadedConfig: { module: { destroy: destroyFn } } },
    };
    const loadedConfigBackup = activatedRouteSnapshot.routeConfig._loadedConfig;
    const result = guard.canDeactivate({}, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    expect(activatedRouteSnapshot.routeConfig._loadedConfig).not.toBeUndefined();
    expect(activatedRouteSnapshot.routeConfig._loadedConfig).toEqual(loadedConfigBackup);
    expect(isDestroyExecuted).toBeFalsy();
  });
}
