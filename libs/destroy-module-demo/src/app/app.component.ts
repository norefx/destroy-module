import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: `dm-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
