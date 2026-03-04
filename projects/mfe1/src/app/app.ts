import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe1-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Client Search');
  protected readonly description = signal('Search and view client records.');
}