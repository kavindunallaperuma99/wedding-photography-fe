import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/reservations/models/reservation.model';
import { ReservationsService } from 'src/app/reservations/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations$: Observable<Reservation[]> = new Observable();

  constructor(private reservationsService: ReservationsService) {
    this.reservations$ = this.reservationsService.get();
  }

  ngOnInit(): void {}
}
