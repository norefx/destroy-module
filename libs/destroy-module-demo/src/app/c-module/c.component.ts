import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoopService } from '../services/loop.service';

@Component({
  selector: `dm-c`,
  templateUrl: `./c.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CComponent {
  constructor(private readonly _loopService: LoopService) {}
}
