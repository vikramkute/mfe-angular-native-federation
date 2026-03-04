import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe2-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Deposits');
  protected readonly description = signal('Create and review deposit transactions.');
}