import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  urlLogo: string;

  constructor() {
    this.urlLogo = 'assets/img/logo.png';
  }
}
