import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientQueueComponent } from './widgets/client-queue/client-queue.component';
import { ClientSearchComponent } from './widgets/client-search/client-search.component';
import { DrawerBalanceComponent } from './widgets/drawer-balance/drawer-balance.component';
import { QuickToolsComponent } from './widgets/quick-tools/quick-tools.component';
import { RecentTransactionsComponent } from './widgets/recent-transactions/recent-transactions.component';
import { TodaysActivityComponent } from './widgets/todays-activity/todays-activity.component';
import { TransactionsComponent } from './widgets/transactions/transactions.component';

@Component({
  selector: 'app-shell-home',
  imports: [
    ClientSearchComponent,
    TransactionsComponent,
    QuickToolsComponent,
    DrawerBalanceComponent,
    TodaysActivityComponent,
    ClientQueueComponent,
    RecentTransactionsComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
