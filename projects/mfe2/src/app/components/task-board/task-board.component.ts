import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderControlsComponent } from './sections/header-controls/header-controls.component';
import { IssuesTableComponent } from './sections/issues-table/issues-table.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { SidebarItem, TaskIssue } from './task-board.models';

@Component({
  selector: 'app-mfe2-task-board',
  imports: [SidebarComponent, HeaderControlsComponent, IssuesTableComponent],
  templateUrl: './task-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskBoardComponent {
  protected readonly appTitle = signal('Task app');
  protected readonly heading = signal('Active issues');

  protected readonly menuItems = signal<readonly SidebarItem[]>([
    { id: 'active-issues', label: 'Active issues', active: true },
    { id: 'menu-1', label: 'Menu item', active: false },
    { id: 'menu-2', label: 'Menu item', active: false },
    { id: 'menu-3', label: 'Menu item', active: false },
    { id: 'menu-4', label: 'Menu item', active: false },
  ]);

  protected readonly issues = signal<readonly TaskIssue[]>([
    { id: 'FIG-123', title: 'Task 1', project: 'Project 1', priority: 'High', date: 'Dec 5', ownerInitials: 'AN' },
    { id: 'FIG-122', title: 'Task 2', project: 'Acme GTM', priority: 'Low', date: 'Dec 5', ownerInitials: 'AN' },
    {
      id: 'FIG-121',
      title: 'Write blog post for demo day',
      project: 'Acme GTM',
      priority: 'High',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-120',
      title: 'Publish blog page',
      project: 'Website launch',
      priority: 'Low',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-119',
      title: 'Add gradients to design system',
      project: 'Design backlog',
      priority: 'Medium',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-118',
      title: 'Responsive behavior doesn\'t work on Android',
      project: 'Bug fixes',
      priority: 'Medium',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-117',
      title: 'Confirmation states not rendering properly',
      project: 'Bug fixes',
      priority: 'Medium',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-116',
      title: 'Text wrapping is awkward on older iPhones',
      project: 'Bug fixes',
      priority: 'Low',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-115',
      title: 'Revise copy on About page',
      project: 'Website launch',
      priority: 'Low',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-114',
      title: 'Publish HackerNews post',
      project: 'Acme GTM',
      priority: 'Low',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-113',
      title: 'Review image licensing for header section images',
      project: 'Website Launch',
      priority: 'High',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-112',
      title: 'Accessibility focused state for input fields',
      project: 'Design backlog',
      priority: 'High',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-111',
      title: 'Header IA revision to support addition of blog page',
      project: 'Design backlog',
      priority: 'High',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-110',
      title: 'Press outbound',
      project: 'Acme GTM',
      priority: 'Medium',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-109',
      title: 'GIFs flicker when looping back more than 3 times on the header images',
      project: 'Bug fixes',
      priority: 'Low',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
    {
      id: 'FIG-108',
      title: 'Editorial format for blog posts on website',
      project: 'Design backlog',
      priority: 'High',
      date: 'Dec 5',
      ownerInitials: 'AN',
    },
  ]);
}
