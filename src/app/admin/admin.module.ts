import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { PortfolioUpdateComponent } from './components/portfolio-update/portfolio-update.component';
import { ChatHolderComponent } from './components/chat-holder/chat-holder.component';

@NgModule({
  declarations: [AdminComponent, ReservationsComponent, PortfolioUpdateComponent, ChatHolderComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
