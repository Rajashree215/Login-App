import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserManagementService } from '../Services/user-management.service';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertmsgService } from '../Services/alertmsg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButton, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  uname: string = this._user.username;

  constructor(
    private _user: UserManagementService,
    private _alert: AlertmsgService,
    private router: Router
  ) {}

  logout() {
    if (this._user.logoutUser()) {
      this._alert.openAlertMsg('Logout Success!!');
      this.router.navigate(['/']);
    }
  }
}
