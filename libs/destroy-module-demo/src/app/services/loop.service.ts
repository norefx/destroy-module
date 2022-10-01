import { Inject, Injectable, InjectionToken, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

export const MODULE_NAME = new InjectionToken<string>(`Module Name Token`);
const NAME = `LoopService`;

@Injectable()
export class LoopService implements OnDestroy {
  private readonly _alive$ = new Subject<void>();

  constructor(@Inject(MODULE_NAME) private readonly _moduleName: string) {
    interval(1000)
      .pipe(
        tap((i) => console.log(`${NAME} at ${_moduleName} tap ${i}`)),
        takeUntil(this._alive$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    console.log(`${NAME} destroyed`);
    this._alive$.next();
    this._alive$.complete();
  }
}
