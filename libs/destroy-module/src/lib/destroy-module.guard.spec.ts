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
    guard = TestBed.inject(DestroyModuleGuard);
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
      routeConfig: { _loadedInjector: { destroy: destroyFn }, _loadedRoutes: [] },
    };
    const result = guard.canDeactivate(null, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    expect(activatedRouteSnapshot.routeConfig._loadedInjector).toBeUndefined();
    expect(activatedRouteSnapshot.routeConfig._loadedRoutes).toBeUndefined();
    expect(isDestroyExecuted).toBeTruthy();
  });

  it(`should allow module redirect with empty loaded config`, () => {
    const activatedRouteSnapshot: RouteWithConfig = { routeConfig: {} };
    const result = guard.canDeactivate(null, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    if (isDefinedObject(activatedRouteSnapshot.routeConfig)) {
      expect(`_loadedConfig` in activatedRouteSnapshot.routeConfig).toBeFalsy();
      expect(`_loadedRoutes` in activatedRouteSnapshot.routeConfig).toBeFalsy();
    }
    expect(isDestroyExecuted).toBeFalsy();
  });

  it(`should allow component redirect`, () => {
    const activatedRouteSnapshot: RouteWithExtendedConfig<unknown> = {
      routeConfig: { _loadedInjector: { destroy: destroyFn }, _loadedRoutes: [] },
    };
    const loadedInjectorBackup = activatedRouteSnapshot.routeConfig._loadedInjector;
    const loadedRoutesBackup = activatedRouteSnapshot.routeConfig._loadedRoutes;
    const result = guard.canDeactivate({}, activatedRouteSnapshot);

    expect(result).toBeTruthy();
    expect(activatedRouteSnapshot.routeConfig._loadedInjector).not.toBeUndefined();
    expect(activatedRouteSnapshot.routeConfig._loadedRoutes).not.toBeUndefined();
    expect(activatedRouteSnapshot.routeConfig._loadedInjector).toEqual(loadedInjectorBackup);
    expect(activatedRouteSnapshot.routeConfig._loadedRoutes).toEqual(loadedRoutesBackup);
    expect(isDestroyExecuted).toBeFalsy();
  });
}
