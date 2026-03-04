import { TestBed } from '@angular/core/testing';
import { ClientQueueComponent } from './client-queue.component';

describe('ClientQueueComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientQueueComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ClientQueueComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render queue items', () => {
    const fixture = TestBed.createComponent(ClientQueueComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Client Queue');
    expect(compiled.querySelectorAll('li').length).toBe(4);
  });
});
