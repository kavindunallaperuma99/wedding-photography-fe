import { UserRole } from './../../enums/user-role.enum';
import { Router } from '@angular/router';
import { AdminLoginService } from './../../services/admin-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  userName!: string;
  password!: string;

  isInvalid: boolean = false;
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router
  ) {
    if (localStorage.getItem('role') == UserRole.Admin.toString()) {
      this.router.navigateByUrl('admin/dashboard');
    }
  }

  ngOnInit(): void {}

  login(userName: string, password: string) {
    let res = this.adminLoginService.login(userName, password);

    if (res) {
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.isInvalid = true;
    }
  }
}
