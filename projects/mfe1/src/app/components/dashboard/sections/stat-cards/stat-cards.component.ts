import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type StatCard = {
  title: string;
  value: string;
  trend: string;
};

@Component({
  selector: 'app-mfe1-stat-cards',
  imports: [],
  templateUrl: './stat-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardsComponent {
  protected readonly cards = signal<StatCard[]>([
    { title: 'Revenue', value: '$45,678.90', trend: '+20% month over month' },
    { title: 'Sessions', value: '2,405', trend: '+33% month over month' },
    { title: 'Conversion', value: '10,353', trend: '-8% month over month' },
  ]);
}
