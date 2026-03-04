import { TestBed } from '@angular/core/testing';
import { RecentTransactionsComponent } from './recent-transactions.component';

describe('RecentTransactionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTransactionsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RecentTransactionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render transaction table rows', () => {
    const fixture = TestBed.createComponent(RecentTransactionsComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Recent Transactions');
    expect(compiled.querySelectorAll('tbody tr').length).toBe(3);
  });
});
