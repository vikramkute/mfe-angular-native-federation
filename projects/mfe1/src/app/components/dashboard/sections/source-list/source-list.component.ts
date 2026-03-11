import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type SourceRow = {
  source: string;
  sessions: string;
  change: string;
};

@Component({
  selector: 'app-mfe1-source-list',
  imports: [],
  templateUrl: './source-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceListComponent {
  protected readonly rows = signal<SourceRow[]>([
    { source: 'website.net', sessions: '4321', change: '+84%' },
    { source: 'website.net', sessions: '4033', change: '-8%' },
    { source: 'website.net', sessions: '3128', change: '+2%' },
    { source: 'website.net', sessions: '2104', change: '+33%' },
    { source: 'website.net', sessions: '2003', change: '+30%' },
    { source: 'website.net', sessions: '1894', change: '+15%' },
    { source: 'website.net', sessions: '405', change: '-12%' },
  ]);
}
