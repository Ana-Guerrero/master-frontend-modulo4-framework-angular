import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/authentication/auth.service';
import { pathNames } from '../../../../app-routing-paths';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(public authService: AuthService, private router: Router) {
    setTimeout(() => {
      this.authService.isLogged()
        ? this.router.navigate([pathNames.dashboard])
        : this.router.navigate([pathNames.home]);
    }, 5000);
  }
}
