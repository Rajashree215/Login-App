import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AlertmsgService } from '../Services/alertmsg.service';
import { UserManagementService } from '../Services/user-management.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButton,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  email: string = '';
  pass: string = '';

  constructor(
    private router: Router,
    private _alert: AlertmsgService,
    private _users: UserManagementService
  ) {}

  login() {
    if (this.email.trim() !== '' && this.pass.trim() !== '') {
      const res: string = this._users.loginUser(this.email, this.pass);
      this._alert.openAlertMsg(res);
      if (res === 'Login Success') {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this._alert.openAlertMsg('Enter all fields');
    }
    this.email='';
    this.pass='';
  }
}
