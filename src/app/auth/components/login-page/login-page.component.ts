import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login();
    console.log('User email: ', this.email);
    console.log('User password: ', this.password);
  }
}
