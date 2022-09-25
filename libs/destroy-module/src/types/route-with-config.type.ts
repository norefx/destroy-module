import { ActivatedRouteSnapshot } from '@angular/router';
import { ExtendedRoute } from './extended-route.type';

export type RouteWithConfig = Pick<ActivatedRouteSnapshot, 'routeConfig'>;
export type RouteWithExtendedConfig<T> = RouteWithConfig | { routeConfig: ExtendedRoute<T> };
