import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { PortfolioUpdateComponent } from './components/portfolio-update/portfolio-update.component';
import { ChatHolderComponent } from './components/chat-holder/chat-holder.component';
import { ChatMessageComponent } from './components/chat-holder/chat-message/chat-message.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    ReservationsComponent,
    PortfolioUpdateComponent,
    ChatHolderComponent,
    ChatMessageComponent,
    ChatListComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [ChatHolderComponent, ChatMessageComponent],
})
export class AdminModule {}
