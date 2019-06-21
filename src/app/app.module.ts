import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'ngx-moment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailInboxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
