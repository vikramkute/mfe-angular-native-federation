import { TestBed } from '@angular/core/testing';
import { TodaysActivityComponent } from './todays-activity.component';

describe('TodaysActivityComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysActivityComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TodaysActivityComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render activity list', () => {
    const fixture = TestBed.createComponent(TodaysActivityComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain("Today's Activity");
    expect(compiled.querySelectorAll('li').length).toBe(4);
  });
});
