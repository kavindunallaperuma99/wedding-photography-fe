import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ResponseDTO } from 'src/app/reservations/models/response.dto';
import { environment } from 'src/environments/environment';
import { Portfolio } from '../model/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly API_URL: string = environment.API_URL + '/portfolio';

  constructor(private http: HttpClient) {}

  create(reservation: Portfolio): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.API_URL, reservation);
  }

  update(reservation: Portfolio): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.API_URL, reservation);
  }

  get(): Observable<Portfolio[]> {
    let subject = new Subject<Portfolio[]>();
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
