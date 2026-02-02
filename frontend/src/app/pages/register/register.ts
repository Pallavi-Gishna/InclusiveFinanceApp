import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, HttpClientModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMsg = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Form valid if name/email filled, email pattern valid, password >=6, and confirm matches
  get isFormValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      this.name.trim().length > 0 &&
      emailPattern.test(this.email) &&
      this.password.length >= 6 &&
      this.password === this.confirmPassword
    );
  }

  onRegister() {
    if (!this.isFormValid) {
      this.errorMsg = 'Please fill all fields correctly and ensure passwords match.';
      return;
    }

    const registerData = {
      fullName: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:5000/auth/register', registerData).subscribe({
      next: (response) => {
        console.log('Register success:', response);

        // Store JWT token if returned
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }

        // Navigate to login or dashboard
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Register error:', err);
        this.errorMsg = err?.error?.error || 'Registration failed. Try again.';
      }
    });
  }
}
