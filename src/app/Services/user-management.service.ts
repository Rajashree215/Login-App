import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  private users: any = {
    'rajashree@ecrio.com': {
      uname: 'Rajashree',
      email: 'rajashree@ecrio.com',
      pass: '12345678',
    },
  };
  username: string = '';

  constructor() {}

  // adds the user to the user object
  registerUser(email: string, uname: string, pass: string): boolean {
    const userobj = {
      uname: uname,
      email: email,
      pass: pass,
    };
    this.users[email] = userobj;
    console.log(this.users);
    return true;
  }

  loginUser(email: string, pass: string): string {
    const user = this.users[email];
    if (user) {
      if (user.email === email && user.pass === pass) {
        this.username = user.uname;
        localStorage.setItem('email', user.email);
        return 'Login Success';
      } else {
        return 'Incorrect Password';
      }
    } else {
      return 'No User Found. Please Register!';
    }
    return '';
  }

  logoutUser():boolean{
    localStorage.removeItem('email');
    return true;
  }
}
