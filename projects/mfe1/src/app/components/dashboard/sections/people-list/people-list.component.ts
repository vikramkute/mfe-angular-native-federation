import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Person = {
  name: string;
  email: string;
};

@Component({
  selector: 'app-mfe1-people-list',
  imports: [],
  templateUrl: './people-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent {
  protected readonly people = signal<Person[]>([
    { name: 'Helena', email: 'email@figmasfakedomain.net' },
    { name: 'Oscar', email: 'email@figmasfakedomain.net' },
    { name: 'Daniel', email: 'email@figmasfakedomain.net' },
    { name: 'Daniel Jay Park', email: 'email@figmasfakedomain.net' },
    { name: 'Mark Rojas', email: 'email@figmasfakedomain.net' },
  ]);
}
