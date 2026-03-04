import { TestBed } from '@angular/core/testing';
import { QuickToolsComponent } from './quick-tools.component';

describe('QuickToolsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickToolsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QuickToolsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render quick tool buttons', () => {
    const fixture = TestBed.createComponent(QuickToolsComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Quick Tools');
    expect(compiled.querySelectorAll('button').length).toBe(4);
  });
});
