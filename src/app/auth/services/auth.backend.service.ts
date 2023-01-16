import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthBackEndService {
  private readonly _loginURL: string = environment.API_URL + '/auth';

  constructor(private http: HttpClient) {
    // this.testAPI().subscribe((res) => console.log(res));
  }

  testAPI() {
    return this.http.get<any>(this._loginURL);
  }

  validateCitizen(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this._loginURL}/login/citizen`, {
      email: email,
      password: password,
    });
  }

  validateCompany(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this._loginURL}/login/company`, {
      email: email,
      password: password,
    });
  }

  validateBureauOfficer(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this._loginURL}/login/bureau-officer`, {
      email: email,
      password: password,
    });
  }

  // createCitizen(citizen: Citizen): Observable<any> {
  //   return this.http.post<any>(`${this._loginURL}/citizens`, citizen);
  // }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this._loginURL}/current-user`);
  }
}
