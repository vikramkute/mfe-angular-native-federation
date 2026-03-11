import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe1-line-chart-panel',
  imports: [],
  templateUrl: './line-chart-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartPanelComponent {
  protected readonly xAxis = signal(['23 Nov', '24', '25', '26', '27', '28', '29', '30']);
  protected readonly yAxis = signal([
    '$50,000',
    '$45,000',
    '$40,000',
    '$35,000',
    '$30,000',
    '$25,000',
  ]);
}
