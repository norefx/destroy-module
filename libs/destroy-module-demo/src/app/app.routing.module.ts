import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyModuleGuard } from 'ngx-destroy-module';

const ROUTES: Routes = [
  {
    path: ``,
    children: [
      { path: `a-route`, loadChildren: `./a-module/a.module#AModule` },
      {
        path: `b-route`,
        // Guard to destroy module
        canDeactivate: [DestroyModuleGuard],
        loadChildren: `./b-module/b.module#BModule`,
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forRoot(ROUTES)], exports: [RouterModule] })
export class AppRoutingModule {}
