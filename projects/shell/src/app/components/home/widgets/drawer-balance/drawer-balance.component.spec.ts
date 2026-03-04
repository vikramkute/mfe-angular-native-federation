import { TestBed } from '@angular/core/testing';
import { DrawerBalanceComponent } from './drawer-balance.component';

describe('DrawerBalanceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerBalanceComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DrawerBalanceComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render balance rows', () => {
    const fixture = TestBed.createComponent(DrawerBalanceComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Drawer Balance');
    expect(compiled.querySelectorAll('strong').length).toBe(3);
  });
});
