import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Banking Operations');
  protected readonly remotes = [
    { name: 'Client Search', path: 'mfe1' },
    { name: 'Deposits', path: 'mfe2' },
    { name: 'Withdrawals', path: 'mfe3' },
    { name: 'Transfers', path: 'mfe4' },
    { name: 'Account Enquiry', path: 'mfe5' },
  ];
}
