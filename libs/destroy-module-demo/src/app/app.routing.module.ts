import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyModuleGuard } from '@norefx/ngx-destroy-module';

const ROUTES: Routes = [
  {
    path: ``,
    children: [
      { path: `a-route`, loadChildren: () => import(`./a-module/a.module`).then((m) => m.AModule) },
      {
        path: `b-route`,
        // Guard to destroy module
        canDeactivate: [DestroyModuleGuard],
        loadChildren: () => import(`./b-module/b.module`).then((m) => m.BModule),
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forRoot(ROUTES)], exports: [RouterModule] })
export class AppRoutingModule {}
