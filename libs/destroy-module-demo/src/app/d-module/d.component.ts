import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MODULE_NAME } from '../services/loop.service';

@Component({ selector: `dm-d`, templateUrl: './d.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class DComponent {
  constructor(@Inject(MODULE_NAME) public readonly moduleName: string) {}
}
