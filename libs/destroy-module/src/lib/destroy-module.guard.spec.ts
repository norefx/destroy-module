import { async, TestBed } from '@angular/core/testing';
import { isDefinedObject } from '../types/defined-object.util';
import { RouteWithExtendedConfig, RouteWithConfig } from '../types/route-with-config.type';
import { DestroyModuleGuard } from './destroy-module.guard';

let guard: DestroyModuleGuard<any>;

describe(`DestroyModuleGuard`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ providers: [DestroyModuleGuard] })
      .compileComponents()
      .then(() => {});
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
    const activatedRouteSnapshot: RouteWithExtendedConfig<any> = {
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
    const activatedRouteSnapshot: RouteWithExtendedConfig<any> = {
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
