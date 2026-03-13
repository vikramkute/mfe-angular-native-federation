import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TaskIssue } from '../../task-board.models';

@Component({
  selector: 'app-mfe2-issues-table',
  imports: [],
  templateUrl: './issues-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesTableComponent {
  readonly issues = input.required<readonly TaskIssue[]>();

  protected priorityClasses(priority: TaskIssue['priority']): string {
    if (priority === 'High') {
      return 'border-rose-200 bg-rose-50 text-rose-800';
    }

    if (priority === 'Medium') {
      return 'border-amber-200 bg-amber-50 text-amber-800';
    }

    return 'border-emerald-200 bg-emerald-50 text-emerald-800';
  }
}
