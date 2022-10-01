import { ActivatedRouteSnapshot } from '@angular/router';
import { ExtendedRoute } from './extended-route.type';

// eslint-disable-next-line quotes
export type RouteWithConfig = Pick<ActivatedRouteSnapshot, 'routeConfig'>;
export type RouteWithExtendedConfig<T> = RouteWithConfig | { routeConfig: ExtendedRoute<T> };
