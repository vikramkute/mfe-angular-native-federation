import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskBoardComponent } from './components/task-board/task-board.component';

@Component({
  selector: 'app-mfe2-root',
  imports: [TaskBoardComponent],
  templateUrl: './app.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}