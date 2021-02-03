import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth.service';
import { pathNames } from '../../../app-routing-paths';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss'],
})
export class MenuPrivateComponent {
  constructor(public authService: AuthService, private router: Router) {}

  handleLogOut(): void {
    this.authService.logOut();
    this.router.navigate([pathNames.home]);
  }
}
