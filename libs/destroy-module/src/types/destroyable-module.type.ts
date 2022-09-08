import { NgModuleRef } from '@angular/core';

export type DestroyableModule<T> = Pick<NgModuleRef<T>, 'destroy'>;
