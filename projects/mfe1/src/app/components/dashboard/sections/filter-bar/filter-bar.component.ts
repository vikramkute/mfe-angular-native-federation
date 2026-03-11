import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe1-filter-bar',
  imports: [],
  templateUrl: './filter-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBarComponent {
  protected readonly searchLabel = signal('Search');
  protected readonly options = ['Music', 'Podcasts', 'Live'];
  protected readonly selected = signal('Music');

  protected select(option: string): void {
    this.selected.set(option);
  }
}
