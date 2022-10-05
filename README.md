# DestroyModule

> Guard to destroy Angular lazy-loaded route modules

## Angular Versions Compatibility

|                        destroy-module                        |  Angular  |
| :----------------------------------------------------------: | :-------: |
| [9.x.x](https://github.com/norefx/destroy-module/tree/9.x.x) | >= 9 < 10 |
| [8.x.x](https://github.com/norefx/destroy-module/tree/8.x.x) | >= 8 < 9  |
| [7.x.x](https://github.com/norefx/destroy-module/tree/7.x.x) | >= 7 < 8  |
| [6.x.x](https://github.com/norefx/destroy-module/tree/6.x.x) | >= 6 < 7  |
| [5.x.x](https://github.com/norefx/destroy-module/tree/5.x.x) | >= 5 < 6  |
| [4.x.x](https://github.com/norefx/destroy-module/tree/4.x.x) | >= 4 < 5  |

## Table of contents

- [What is DestroyModule](#what-is-destroymodule)
- [Getting started](#getting-started)
- [Demo](#demo)

## What is DestroyModule

Angular modules keep alive until you call their `destroy()` methods manually. This causes that provided services in modules will keep alive too. For more information you can read angular issues angular/angular#24962, angular/angular#37095. DestroyModule is guard that call `destroy()` method of guarded lazy-loaded route modules on deactivation.

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

[Stackblitz Demo](https://angular-ivy-ytzddb.stackblitz.io)

[Demo](https://user-images.githubusercontent.com/89928030/188677092-2d230816-4c50-4272-a691-5e4e0cefbcf4.webm)
