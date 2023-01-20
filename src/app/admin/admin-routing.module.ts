import { AuthGuard } from './../guards/auth.guard';
import { UserRole } from './enums/user-role.enum';
import { RoleGuard } from './../guards/role.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
  { path: 'login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
