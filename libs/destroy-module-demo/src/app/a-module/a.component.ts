import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoopService } from '../services/loop.service';

@Component({ selector: `dm-a`, templateUrl: './a.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class AComponent {
  constructor(private readonly _loopService: LoopService) {}
}
