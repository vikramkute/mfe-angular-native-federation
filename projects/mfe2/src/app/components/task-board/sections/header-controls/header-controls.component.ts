import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-mfe2-header-controls',
  imports: [],
  templateUrl: './header-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlsComponent {
  readonly heading = input.required<string>();
}
