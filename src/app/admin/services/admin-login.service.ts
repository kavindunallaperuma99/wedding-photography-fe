import { Router } from '@angular/router';
import { UserRole } from './../enums/user-role.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor(private router: Router) {}

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
    this.router.navigateByUrl('/admin/login');
  }
}
