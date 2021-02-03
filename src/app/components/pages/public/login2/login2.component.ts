import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/authentication/auth.service';
import { pathNames } from '../../../../app-routing-paths';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
})
export class Login2Component {
  public userForm: FormGroup;
  public usernameCtrl: FormControl;
  public passwordCtrl: FormControl;
  public loginDataError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.createEditForm();
    this.loginDataError = false;
  }

  createEditForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.usernameCtrl = this.userForm.get('username') as FormControl;
    this.passwordCtrl = this.userForm.get('password') as FormControl;
  }

  updateUsername(value: string): void {
    this.usernameCtrl.setValue(value);
  }

  updatePassword(value: string): void {
    this.passwordCtrl.setValue(value);
  }

  handleSubmit(event: MouseEvent): void {
    event.preventDefault();
    this.authService.setSpinnerState(true);
    this.authService
      .login(
        this.userForm.get('username').value,
        this.userForm.get('password').value
      )
      .subscribe(
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
}
