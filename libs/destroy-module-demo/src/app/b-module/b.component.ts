import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoopService } from '../services/loop.service';

@Component({ selector: `dm-b`, templateUrl: `./b.component.html`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BComponent {
  constructor(private readonly _loopService: LoopService) {}
}
