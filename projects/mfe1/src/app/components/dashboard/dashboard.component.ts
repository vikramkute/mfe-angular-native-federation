import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { FilterBarComponent } from './sections/filter-bar/filter-bar.component';
import { StatCardsComponent } from './sections/stat-cards/stat-cards.component';
import { LineChartPanelComponent } from './sections/line-chart-panel/line-chart-panel.component';
import { PeopleListComponent } from './sections/people-list/people-list.component';
import { SourceListComponent } from './sections/source-list/source-list.component';
import { BarChartPanelComponent } from './sections/bar-chart-panel/bar-chart-panel.component';

@Component({
  selector: 'app-mfe1-dashboard',
  imports: [
    NavigationComponent,
    FilterBarComponent,
    StatCardsComponent,
    LineChartPanelComponent,
    PeopleListComponent,
    SourceListComponent,
    BarChartPanelComponent,
  ],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
