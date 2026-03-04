import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recent-transactions',
  imports: [],
  templateUrl: './recent-transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentTransactionsComponent {}
