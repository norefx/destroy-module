import { NgModule, OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DModule } from '../d-module/d.module';
import { LoopService, MODULE_NAME } from '../services/loop.service';
import { CComponent } from './c.component';

const NAME = `CModule`;
const ROUTES: Routes = [{ path: ``, component: CComponent }];

@NgModule({
  declarations: [CComponent],
  imports: [DModule, RouterModule.forChild(ROUTES)],
  providers: [LoopService, { provide: MODULE_NAME, useValue: NAME }],
})
export class CModule implements OnDestroy {
  ngOnDestroy(): void {
    console.log(`${NAME} destroyed`);
  }
}
