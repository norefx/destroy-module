import { NgModuleRef } from '@angular/core';

// eslint-disable-next-line quotes
export type DestroyableModule<T> = Pick<NgModuleRef<T>, 'destroy'>;
