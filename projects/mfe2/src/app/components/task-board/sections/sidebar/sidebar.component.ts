import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SidebarItem } from '../../task-board.models';

@Component({
  selector: 'app-mfe2-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly title = input.required<string>();
  readonly items = input.required<readonly SidebarItem[]>();
}
