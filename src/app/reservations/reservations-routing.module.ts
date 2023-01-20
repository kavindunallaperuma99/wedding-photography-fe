import { UserRole } from './../admin/enums/user-role.enum';
import { RoleGuard } from './../guards/role.guard';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReservationDetailsComponent,
    canActivate: [RoleGuard],
    data: { roles: [UserRole.Regular] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
