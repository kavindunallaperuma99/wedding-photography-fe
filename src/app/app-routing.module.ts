import { UserRole } from './admin/enums/user-role.enum';
import { AuthGuard } from './guards/auth.guard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RoleGuard } from './guards/role.guard';
import { HomeComponent } from './home/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserType } from './auth/enums/user-types.enum';
import { PortfolioUploadComponent } from './portfolio-upload/portfolio-upload.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'reserve',
    loadChildren: () =>
      import('./reservations/reservations.module').then(
        (m) => m.ReservationsModule
      ),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'portfolio', component: PortfolioComponent },
  {
    path: 'portfolio/upload',
    component: PortfolioUploadComponent,
    canActivate: [RoleGuard, AuthGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
