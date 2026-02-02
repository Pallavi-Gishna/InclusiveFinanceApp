import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';

const DEV_BYPASS_LOGIN = true; // 🔥 TURN OFF LATER

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements AfterViewInit {

  // ---- FORM STATE (required by template)
  email = '';
  password = '';
  errorMsg = '';

  isLoginMode = true;
  loginSuccess = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // ---- REQUIRED BY TEMPLATE
  get isFormValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email) && this.password.length >= 6;
  }

  toggleMode(forceLogin?: boolean): void {
    if (typeof forceLogin === 'boolean') {
      this.isLoginMode = forceLogin;
    } else {
      this.isLoginMode = !this.isLoginMode;
    }
  }

  onGoogleLogin(): void {
    if (DEV_BYPASS_LOGIN) {
      this.fakeLoginAndRedirect();
      return;
    }

    window.location.href = 'http://localhost:5000/auth/google';
  }

  onLogin(): void {

    // ✅ DEV SHORT-CIRCUIT
    if (DEV_BYPASS_LOGIN) {
      this.fakeLoginAndRedirect();
      return;
    }

    if (!this.isFormValid) {
      this.errorMsg =
        'Please enter a valid email and password (min 6 characters)';
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:5000/auth/login', loginData)
      .subscribe({
        next: (response) => {
          localStorage.setItem('authToken', response.token);
          this.loginSuccess = true;
          this.onLoginSuccess();
        },
        error: () => {
          this.errorMsg = 'Invalid email or password';
        }
      });
  }

  onLoginSuccess(): void {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 300);
  }

  ngAfterViewInit(): void {

    // ✅ OPTIONAL: auto-skip login screen entirely
    if (DEV_BYPASS_LOGIN) {
      this.fakeLoginAndRedirect();
      return;
    }

    // animation script
    const script = document.createElement('script');
    script.src =
      'https://gist.github.com/CodeMyUI/357b6275086c0f364344c2f3965b2e80.js';
    script.async = true;
    document.body.appendChild(script);
  }

  // ---- DEV HELPER
  private fakeLoginAndRedirect(): void {
    localStorage.setItem('authToken', 'DEV_FAKE_TOKEN');
    localStorage.setItem('user', JSON.stringify({
      id: 1,
      name: 'Dev User',
      email: 'dev@test.com'
    }));

    this.router.navigate(['/dashboard']);
  }
}
