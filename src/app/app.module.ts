import { ToastrModule } from 'ngx-toastr';
import { environment } from './../environments/environment';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './common/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioUploadComponent } from './portfolio-upload/portfolio-upload.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
  url: environment.SOCKET_URL,
  options: {},
};

@NgModule({
  declarations: [AppComponent, PortfolioComponent, PortfolioUploadComponent],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    AppRoutingModule,

    SocketIoModule.forRoot(config),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
