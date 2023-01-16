import { AdminModule } from './../admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [ReservationDetailsComponent],
  imports: [
    // CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationsRoutingModule,
    AdminModule,

    ToastrModule.forRoot(),
  ],
  providers: [ToastrService],
  exports: [ToastrModule],
})
export class ReservationsModule {}
