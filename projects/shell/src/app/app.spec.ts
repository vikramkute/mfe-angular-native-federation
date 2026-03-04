import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render home title link', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleLink = compiled.querySelector('h1 a');

    expect(titleLink?.textContent).toContain('Banking Operations');
    expect(titleLink?.getAttribute('href')).toBe('/');
  });

  it('should render all remote navigation links', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('nav a')).map((link) =>
      link.textContent?.trim(),
    );

    expect(links).toEqual([
      'Client Search',
      'Deposits',
      'Withdrawals',
      'Transfers',
      'Account Enquiry',
    ]);
  });
});
