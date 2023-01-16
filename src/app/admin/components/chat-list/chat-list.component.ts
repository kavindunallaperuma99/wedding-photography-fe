import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Chat } from '../../model/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chats: Chat[] = [
    { userId: 'hehehe', messages: [{ name: 'h', message: 'hello' }] },
    { userId: 'MMMM', messages: [{ name: 'h', message: 'hello' }] },
    { userId: 'KKK', messages: [{ name: 'h', message: 'hello' }] },
  ];

  @Output() chatSelected: EventEmitter<Chat> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectChat(chat: Chat) {
    this.chatSelected.emit(chat);
  }
}
