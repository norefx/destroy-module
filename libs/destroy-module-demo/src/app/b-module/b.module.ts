import { NgModule, OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyModuleGuard } from 'ngx-destroy-module';
import { DModule } from '../d-module/d.module';
import { LoopService, MODULE_NAME } from '../services/loop.service';
import { BComponent } from './b.component';

const NAME = `BModule`;
const ROUTES: Routes = [
  {
    path: ``,
    component: BComponent,
    // Not supported component destroy
    canDeactivate: [DestroyModuleGuard],
    children: [
      {
        path: `c-route`,
        // Guard to destroy module
        canDeactivate: [DestroyModuleGuard],
        loadChildren: `../c-module/c.module#CModule`,
      },
    ],
  },
];

@NgModule({
  declarations: [BComponent],
  imports: [DModule, RouterModule.forChild(ROUTES)],
  providers: [LoopService, { provide: MODULE_NAME, useValue: NAME }],
})
export class BModule implements OnDestroy {
  ngOnDestroy(): void {
    console.log(`${NAME} destroyed`);
  }
}
