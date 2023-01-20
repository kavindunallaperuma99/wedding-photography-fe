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

  constructor(private socket: Socket) {}

  @ViewChild('messageContainer') messageContainer: ElementRef =
    {} as ElementRef;

  ngOnInit(): void {
    if (this.mode == 'Client') {
      this.chat = new Chat();
    }

    //listening to messages
    this.socket.on('message', (res: ChatMessage) => {
      console.log('messagee', res, this.chat);
      let msg = new ChatMessage();
      if (
        (this.mode === 'Admin' && res.senderId == this.chat.userId) ||
        (this.mode == 'Client' && res.senderId == 'Admin')
      ) {
        msg.message = res.message;
        msg.senderId = res.senderId!;
        if (this.chat) {
          this.chat?.messages?.push(msg);
        }
      }
    });
  }

  sendMessage() {
    // console.log('sending message');

    if (this.messageInput.length > 0) {
      let message = new ChatMessage();
      message.message = this.messageInput;
      message.mode = this.mode;
      message.receiverUserId = this.chat.userId;
      message.senderId = 'You';

      console.log('sending message', message);
      this.chat.messages.push(message);

      if (this.mode == 'Admin') {
        this.socket.emit('message', message);
      } else if (this.mode == 'Client') {
        message.receiverUserId = 'Admin';
        this.socket.emit('message', message);
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
