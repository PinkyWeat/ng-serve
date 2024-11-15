import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
      country: ['', Validators.required],
      referral: [''] // Optional field, no Validators.required
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.userForm.valid);
    console.log('Form Data:', this.userForm.value);
    this.formSubmitted = true;
  
    if (this.userForm.valid) {
      alert('Mock email sent successfully!');
      this.userForm.reset();
      this.formSubmitted = false;
    } else {
      console.log('Form is invalid. Errors:', this.userForm.errors);
    }
  }
  
}