import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Observable, Subject } from 'rxjs';
import { ResponseDTO } from '../models/response.dto';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private readonly API_URL: string = environment.API_URL + '/reservations';

  constructor(private http: HttpClient) {}

  create(reservation: Reservation): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.API_URL, reservation);
  }

  update(reservation: Reservation): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.API_URL, reservation);
  }

  get(): Observable<Reservation[]> {
    let subject = new Subject<Reservation[]>();
    this.http.get<ResponseDTO>(this.API_URL).subscribe((res) => {
      subject.next(res.data);
    });

    return subject.asObservable();
  }

  getOne(id: string): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(`${this.API_URL}/${id}`);
  }

  delete(id: string): Observable<ResponseDTO> {
    return this.http.delete<ResponseDTO>(`${this.API_URL}/${id}`);
  }
}
