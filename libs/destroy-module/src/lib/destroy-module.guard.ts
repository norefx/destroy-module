import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PROJECT_NAME } from '../const/project.name';
import { hasField } from '../types/has-field.util';
import { isLoadedConfig } from '../types/loaded-config.util';
import { RouteWithConfig } from '../types/route-with-config.type';

@Injectable()
export class DestroyModuleGuard<T> implements CanDeactivate<T> {
  canDeactivate(component: T, currentRoute: RouteWithConfig): boolean {
    if (!!component) {
      console.log(`${PROJECT_NAME} doesn't support component destroy`);
      return true;
    }

    const routeConfig = currentRoute.routeConfig;

    if (hasField(`_loadedConfig`)(routeConfig)) {
      const loadedConfig = routeConfig._loadedConfig;
      if (isLoadedConfig(loadedConfig)) {
        // Destroy module
        loadedConfig.module.destroy();

        // Unset `loadedConfig` for reassigning it by router on url activation
        delete routeConfig._loadedConfig;
      }
      return true;
    }

    return true;
  }
}
