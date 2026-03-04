import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {}
