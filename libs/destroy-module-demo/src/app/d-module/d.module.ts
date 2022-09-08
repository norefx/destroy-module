import { NgModule, OnDestroy } from '@angular/core';
import { DComponent } from './d.component';

const NAME = `DModule`;
const PUBLIC_DECLARATIONS = [DComponent];

@NgModule({ declarations: [...PUBLIC_DECLARATIONS], exports: [...PUBLIC_DECLARATIONS] })
export class DModule implements OnDestroy {
  ngOnDestroy(): void {
    console.log(`${NAME} destroyed`);
  }
}
