import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Import your standalone component

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import standalone component here
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should send email with valid payload', fakeAsync(() => {
    // Arrange: Set mock values for email and name
    component.email = 'test@example.com';
    component.name = 'Test User';

    const consoleSpy = spyOn(console, 'log'); // Spy on console.log
    const alertSpy = spyOn(window, 'alert'); // Spy on alert

    // Act: Call sendEmail method
    component.sendEmail();

    // Assert: Check if console logs the correct payload
    expect(consoleSpy).toHaveBeenCalledWith('Mock request payload:', {
      email: 'test@example.com',
      name: 'Test User',
    });

    // Simulate the delay and verify the alert message
    tick(1000); // Simulate the passage of 1000ms
    fixture.detectChanges(); // Ensure Angular processes any changes
    expect(consoleSpy).toHaveBeenCalledWith('Mock email sent successfully!');
    expect(alertSpy).toHaveBeenCalledWith('Mock email sent successfully!');
  }));
});