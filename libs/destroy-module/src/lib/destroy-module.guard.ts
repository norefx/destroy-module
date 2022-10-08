import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PROJECT_NAME } from '../const/project.name';
import { isDestroyableModule } from '../types/destroyable-module.util';
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

    if (isExtendedRoute(routeConfig)) {
      const loadedInjector = routeConfig._loadedInjector;
      if (isDestroyableModule(loadedInjector)) {
        // Destroy module
        loadedInjector.destroy();

        // Unset `loadedInjector` and `loadedRoutes` for reassigning it by router on url activation
        delete routeConfig._loadedInjector;
        delete routeConfig._loadedRoutes;
      }
      return true;
    }

    return true;
  }
}
