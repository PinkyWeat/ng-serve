import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // Using HttpClientModule to provide HttpClient
})
export class AppComponent {
  email: string = '';
  name: string = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const payload = {
      email: this.email,
      name: this.name
    };

    console.log('Mock request payload:', payload);
    setTimeout(() => {
      console.log('Mock email sent successfully!');
      alert('Mock email sent successfully!');
    }, 1000); // Simulate a 1-second delay
  }
}
