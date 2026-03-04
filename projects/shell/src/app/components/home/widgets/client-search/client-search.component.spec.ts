import { TestBed } from '@angular/core/testing';
import { ClientSearchComponent } from './client-search.component';

describe('ClientSearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSearchComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ClientSearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render heading and search button', () => {
    const fixture = TestBed.createComponent(ClientSearchComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Client Search');
    expect(compiled.querySelector('button')?.textContent).toContain('Search');
  });
});
