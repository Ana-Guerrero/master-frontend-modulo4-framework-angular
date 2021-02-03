import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { pathNames } from '../app-routing-paths';
import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate([pathNames.home]);
      return false;
    }
    return true;
  }
}
