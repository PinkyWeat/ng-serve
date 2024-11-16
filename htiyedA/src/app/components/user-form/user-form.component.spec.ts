import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormComponent, ReactiveFormsModule, FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.userForm;
    expect(form.get('name')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
    expect(form.get('birthdate')?.value).toBe('');
    expect(form.get('country')?.value).toBe('');
    expect(form.get('referral')?.value).toBe('');
  });

  it('should submit the form without page reload', () => {
    // Set valid form values
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      birthdate: '01-01-2000',
      country: 'USA',
      referral: 'Friend',
    });
  
    const onSubmitSpy = spyOn(component, 'onSubmit').and.callThrough();
  
    // Explicitly call the method instead of simulating a native event
    component.onSubmit(new Event('submit'));
    fixture.detectChanges();
  
    expect(onSubmitSpy).toHaveBeenCalled();
    expect(component.formSubmitted).toBeTrue();
    expect(component.userForm.valid).toBeTrue();
  });

});
