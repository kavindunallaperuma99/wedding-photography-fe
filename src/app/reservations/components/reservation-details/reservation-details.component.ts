import { Reservation } from './../../models/reservation.model';
import { ReservationsService } from './../../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css'],
})
export class ReservationDetailsComponent implements OnInit {
  reservationFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private toastrService: ToastrService
  ) {
    this.reservationFormGroup = this.fb.group({
      bridesName: new FormControl(null, Validators.required),
      groomsName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactNumber: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      venue: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let reservation = new Reservation();
    reservation = this.reservationFormGroup.value;
    reservation.date = new Date(reservation.date)
    this.reservationsService.create(reservation).subscribe((res) => {
      if (res.success) {
        this.reservationFormGroup.reset();
        console.log('Reserved', res.data);
        this.toastrService.success('Reserved');
      }
    });
  }
}
