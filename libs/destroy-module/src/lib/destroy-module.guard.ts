import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PROJECT_NAME } from '../const/project.name';
import { PartialExtendedRoute } from '../types/extended-route.type';
import { isExtendedRoute } from '../types/extended-route.util';
import { RouteWithConfig } from '../types/route-with-config.type';

@Injectable()
export class DestroyModuleGuard<T> implements CanDeactivate<T> {
  canDeactivate(component: T, currentRoute: RouteWithConfig): boolean {
    if (!!component) {
      console.log(`${PROJECT_NAME} doesn't support component destroy`);
      return true;
    }

    const routeConfig = currentRoute.routeConfig;

    if (isExtendedRoute<T>(routeConfig)) {
      // Destroy module
      routeConfig._loadedConfig.module.destroy();
      // Unset `loadedConfig` for reassigning it by router on url activation
      delete (routeConfig as PartialExtendedRoute<T>)._loadedConfig;
      return true;
    }

    return true;
  }
}
