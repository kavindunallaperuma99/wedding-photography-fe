import { UserRole } from './admin/enums/user-role.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wedding-photography-fe';
  constructor() {
    if (localStorage.getItem('role') !== UserRole.Admin.toString()) {
      localStorage.setItem('role', UserRole.Regular.toString());
    }
  }
}
