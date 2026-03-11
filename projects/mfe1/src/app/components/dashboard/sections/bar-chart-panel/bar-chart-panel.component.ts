import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe1-bar-chart-panel',
  imports: [],
  templateUrl: './bar-chart-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartPanelComponent {
  protected readonly bars = signal([149, 179, 149, 137, 204, 314, 210, 254, 185, 156, 137, 22]);
  protected readonly months = signal([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]);
}
