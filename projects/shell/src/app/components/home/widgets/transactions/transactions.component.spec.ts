import { TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TransactionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render transaction metrics', () => {
    const fixture = TestBed.createComponent(TransactionsComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Transactions');
    expect(compiled.querySelectorAll('strong').length).toBe(3);
  });
});
