# DestroyModule

> Guard to destroy Angular lazy-loaded route modules

DestroyModule is guard that call `destroy()` method of guarded lazy-loaded route modules on deactivation to destroy them.

## Getting started

```sh
npm install @norefx/ngx-destroy-module
# If you use yarn
yarn add @norefx/ngx-destroy-module
```

```ts
import { DestroyModuleGuard } from '@norefx/ngx-destroy-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: `example-path`,
        canDeactivate: [DestroyModuleGuard],
        loadChildren: () => import(`./example.module`).then((m) => m.ExampleModule),
      },
    ]),
  ],
  providers: [DestroyModuleGuard],
})
export class ExampleModule {}
```

## Demo

[Stackblitz Demo](https://ngx-destroy-module.stackblitz.io)
