import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe5-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Account Enquiry');
  protected readonly description = signal('View account balances and transaction summaries.');
}