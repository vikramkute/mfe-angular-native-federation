import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe4-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Transfers');
  protected readonly description = signal('Manage account-to-account fund transfers.');
}