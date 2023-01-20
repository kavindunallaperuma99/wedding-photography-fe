import { ResponseDTO } from './../../reservations/models/response.dto';
import { Chat } from './../model/chat.model';
import { Subject, Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly API_URL = environment.API_URL + '/chat';

  constructor(private http: HttpClient) {}

  get(): Observable<Chat[]> {
    let subject = new Subject<Chat[]>();
    this.http.get<ResponseDTO>(this.API_URL).subscribe((res) => {
      if (res.success) {
        let chats: Chat[] = res.data;

        subject.next(chats.filter((c) => c.messages?.length > 0));
      }
    });
    return subject.asObservable();
  }

  getOne(userId: string): Observable<Chat> {
    let subject = new Subject<Chat>();
    this.http.get<ResponseDTO>(`${this.API_URL}/${userId}`).subscribe((res) => {
      if (res.success) subject.next(res.data);
    });
    return subject.asObservable();
  }
}
