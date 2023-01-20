import { UserRole } from './../enums/user-role.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('role', UserRole.Admin.toString());
      localStorage.setItem('authToken', UserRole.Admin.toString());
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('authToken');
  }
}
