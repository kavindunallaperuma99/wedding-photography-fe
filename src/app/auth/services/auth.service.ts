import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthBackEndService } from './auth.backend.service';
import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE_KEYS } from 'src/app/constants/local-storage-keys.constants';
import { UserType } from '../enums/user-types.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role!: UserType;
  _currentRole!: BehaviorSubject<UserType>;

  constructor(
    private authBackendService: AuthBackEndService,
    private router: Router
  ) {
    this.role = this.getUserType(
      localStorage.getItem(LOCAL_STORAGE_KEYS.role) || ''
    );

    this._currentRole = new BehaviorSubject<UserType>(this.role);
  }

  validateAdmin(email: string, password: string): Observable<any> {
    let subject = new Subject<any>();

    if (email == 'admin@admin.com' && password == 'password') {
      localStorage.setItem(LOCAL_STORAGE_KEYS.role, UserType.Admin.toString());
      localStorage.setItem(LOCAL_STORAGE_KEYS.authToken, 'ADMIN');
      localStorage.setItem(LOCAL_STORAGE_KEYS.userJSON, '{ name:"Admin"}');

      this.role = UserType.Admin;
      this._currentRole.next(this.role);
    }
    // this.authBackendService.validateCitizen(email, password).subscribe(
    //   (res) => {
    //     subject.next(res);
    //     console.log('validate', res);

    //     localStorage.setItem(
    //       LOCAL_STORAGE_KEYS.authToken,
    //       res.data.accessToken
    //     );

    //     this.role = UserType.Citizen;
    //     this._currentRole.next(this.role);
    //     localStorage.setItem(LOCAL_STORAGE_KEYS.role, this.role.toString());

    //     let userJSON = JSON.stringify(res.data.citizen);
    //     localStorage.setItem(LOCAL_STORAGE_KEYS.userJSON, userJSON);
    //   },
    //   (error) => {
    //     this.toastr.error('Error');
    //   }
    // );

    return subject.asObservable();
  }

  getUserType(type: string): UserType {
    let t;

    if (type == '') {
      t = UserType.Unauthorized;
    } else {
      t = <UserType>+type;
    }

    return t;
  }

  // redirectByLogin(): void {
  //   const userType: UserType = +(
  //     localStorage.getItem(LOCAL_STORAGE_KEYS.role) || -999
  //   );
  //   switch (userType) {
  //     case UserType.Citizen:
  //       this.router.navigate(['home']);
  //       console.log('home', this.getCurrentCitizen());
  //       break;
  //     case UserType.Company:
  //       console.log('our-vacancies', this.getCurrentCompany());
  //       this.router.navigate(['our-vacancies']);
  //       break;
  //     case UserType.Admin:
  //       console.log('admin', this.getCurrentAdmin());
  //       this.router.navigate(['admin-company-list']);
  //       break;
  //   }
  // }

  checkUserLoginStatus(): boolean {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.authToken)) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.authToken);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.userJSON);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.role);

    this.role = UserType.Unauthorized;

    this.router.navigateByUrl('login');
  }
}
