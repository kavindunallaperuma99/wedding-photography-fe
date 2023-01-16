import { Chat } from './../../model/chat.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatMessage } from '../../model/chat-message.model';

@Component({
  selector: 'app-chat-holder',
  templateUrl: './chat-holder.component.html',
  styleUrls: ['./chat-holder.component.css'],
})
export class ChatHolderComponent implements OnInit {
  messages: Array<ChatMessage> = [];
  messageInput!: string;
  @Input() mode: string = 'Client';
  @Input() chat!: Chat;

  constructor(private socket: Socket) {
    this.getMessage();
  }
  getMessage() {
    this.socket
      .fromEvent('message')
      .subscribe((res) => console.log('messagee', res));
  }

  @ViewChild('messageContainer') messageContainer: ElementRef =
    {} as ElementRef;

  ngOnInit(): void {}

  sendMessage() {
    // console.log('sending message');

    if (this.messageInput.length > 0) {
      this.messages.push({ message: this.messageInput, name: 'You' });

      if (this.mode == 'Admin') {
        this.socket.emit('message', {
          mode: this.mode,
          message: this.messageInput,
          receiverUserId: this.chat.userId,
        });
      } else if (this.mode == 'Client') {
        this.socket.emit('message', {
          mode: this.mode,
          message: this.messageInput,
        });
      }
      this.messageInput = '';
    }

    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messageContainer.nativeElement.scrollTop =
        this.messageContainer.nativeElement.scrollHeight;
    }, 0);
  }
}
