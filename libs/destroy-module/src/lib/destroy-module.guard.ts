import { Injectable } from '@angular/core';
import { CanDeactivate, Route } from '@angular/router';
import { ProjectName } from '../const/project.name';
import { ExtendedRoute } from '../types/extended-route.type';
import { isExtendedRoute } from '../types/extended-route.util';
import { isLoadedConfig } from '../types/loaded-config.util';
import { RouteWithConfig } from '../types/route-with-config.type';

@Injectable()
export class DestroyModuleGuard<T> implements CanDeactivate<T> {
  canDeactivate(component: T, currentRoute: RouteWithConfig): boolean {
    if (!!component) {
      console.log(`${ProjectName} doesn't support component destroy`);
      return true;
    }

    const routeConfig = currentRoute.routeConfig;

    if (isExtendedRoute<T>(routeConfig)) {
      // Destroy module
      routeConfig._loadedConfig.module.destroy();
      // Unset `loadedConfig` for reassigning it by router on url activation
      delete routeConfig._loadedConfig;
      return true;
    }

    return true;
  }
}
