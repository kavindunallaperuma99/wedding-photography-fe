import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Chat } from '../../model/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chats$: Observable<Chat[]>;

  @Output() chatSelected: EventEmitter<Chat> = new EventEmitter();
  constructor(private chatService: ChatService, private socket: Socket) {
    this.chats$ = this.chatService.get();
    this.socket.fromEvent('message').subscribe((res) => {
      console.log('got message', res);
      this.chats$ = this.chatService.get();
      this.chats$.subscribe((res) => console.log('messages', res));
    });

    this.socket.fromEvent('connection').subscribe((res) => {
      console.log('connection', res);
    });
  }

  ngOnInit(): void {}

  selectChat(chat: Chat) {
    this.chatSelected.emit(chat);
  }
}
