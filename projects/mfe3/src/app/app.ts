import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe3-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Withdrawals');
  protected readonly description = signal('Initiate and track withdrawal requests.');
}