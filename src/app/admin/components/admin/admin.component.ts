import { Reservation } from './../../../reservations/models/reservation.model';
import { Observable } from 'rxjs';
import { ReservationsService } from './../../../reservations/services/reservations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {}
}
