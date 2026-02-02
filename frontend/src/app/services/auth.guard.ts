import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

const DEV_BYPASS_AUTH = true; // 🔥 SET false WHEN DONE

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {

    // ✅ DEV MODE: allow dashboard access
    if (DEV_BYPASS_AUTH) {
      // optional: fake login state
      localStorage.setItem('authToken', 'DEV_FAKE_TOKEN');
      return true;
    }

    // 🔒 NORMAL FLOW
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
