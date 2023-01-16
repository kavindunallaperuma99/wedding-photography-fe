import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService // private toastrService: ToastrService
  ) {
    this.authService.validateAdmin('admin@admin.com', 'password');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized(route);
  }

  isAuthorized(route: ActivatedRouteSnapshot): boolean {
    console.log('authservice role', this.authService.role, route);

    let isAuthenticated =
      route.data?.roles?.filter((ro: any) => ro == +this.authService.role)
        .length > 0;

    if (!isAuthenticated) {
      console.log('not authorized');

      // this.toastrService.error('Not Authorized');
    }

    console.log('is authenticated', isAuthenticated);

    return isAuthenticated;
  }
}
