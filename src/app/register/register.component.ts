import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, Router } from '@angular/router';
import { UserManagementService } from '../Services/user-management.service';
import { AlertmsgService } from '../Services/alertmsg.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
  pass: string = '';
  uname: string = '';

  constructor(
    private _user: UserManagementService,
    private _router: Router,
    private _alert: AlertmsgService
  ) {}

  validateEmail(maildId: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return maildId.trim() !== '' && regex.test(maildId);
  }

  validateAllFields() {
    return (
      this.email.trim() === '' &&
      this.uname.trim() === '' &&
      this.pass.trim() === ''
    );
  }

  register() {
    if (this.validateAllFields()) {
      this._alert.openAlertMsg('Enter all fields');
    } else if (!this.validateEmail(this.email)) {
      this._alert.openAlertMsg('Incorrect email format');
    } else if (this.uname.trim() === '') {
      this._alert.openAlertMsg('Name should not be empty');
    } else if (this.pass.trim().length < 8) {
      this._alert.openAlertMsg('Password should have minimum 8 characters');
    } else {
      if (this._user.registerUser(this.email, this.uname, this.pass)) {
        this._alert.openAlertMsg('Registration Success!!','OK')
        this._router.navigate(['/']);
        this.email = '';
        this.uname = '';
        this.pass = '';
      }
    }
  }
}
