export interface SidebarItem {
  readonly id: string;
  readonly label: string;
  readonly active: boolean;
}

export interface TaskIssue {
  readonly id: string;
  readonly title: string;
  readonly project: string;
  readonly priority: 'High' | 'Medium' | 'Low';
  readonly date: string;
  readonly ownerInitials: string;
}
