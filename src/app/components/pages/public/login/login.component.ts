import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../model';
import { AuthService } from '../../../../services/authentication/auth.service';
import { pathNames } from '../../../../app-routing-paths';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private user: User;
  public loginDataError: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.user = { username: '', password: '' };
    this.loginDataError = false;
  }

  handleSubmit(event: MouseEvent): void {
    event.preventDefault();
    this.authService.setSpinnerState(true);
    this.authService.login(this.user.username, this.user.password).subscribe(
      (v) => {
        this.authService.setSpinnerState(false);
        if (v === false) {
          this.loginDataError = true;
          setTimeout(() => {
            this.loginDataError = false;
          }, 4000);
        } else {
          this.router.navigate([pathNames.dashboard]);
        }
      },
      (e) => {
        console.log(`There was something wrong: ${e}`);
      }
    );
  }

  updateUsername(value: string): void {
    this.user = { ...this.user, username: value };
  }

  updatePassword(value: string): void {
    this.user = { ...this.user, password: value };
  }
}
