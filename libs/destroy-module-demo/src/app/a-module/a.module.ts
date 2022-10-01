import { NgModule, OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DModule } from '../d-module/d.module';
import { LoopService, MODULE_NAME } from '../services/loop.service';
import { AComponent } from './a.component';

const NAME = `AModule`;
const ROUTES: Routes = [{ path: ``, component: AComponent }];

@NgModule({
  declarations: [AComponent],
  imports: [DModule, RouterModule.forChild(ROUTES)],
  providers: [LoopService, { provide: MODULE_NAME, useValue: NAME }],
})
export class AModule implements OnDestroy {
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnDestroy(): void {
    console.log(`${NAME} destroyed`);
  }
}
