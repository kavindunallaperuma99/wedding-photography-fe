import { Router } from '@angular/router';
import { AdminLoginService } from './../../../admin/services/admin-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  logout() {
    this.adminLoginService.logout();
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
