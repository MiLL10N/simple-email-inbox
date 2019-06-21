import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';
import { EmailDetailModel } from '../models/emailDetail.model';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {

  emailList : EmailDetailModel[];

  constructor(
    private emailService : EmailService
  ) { }

  ngOnInit() {
    this.emailList = this.emailService.emailInboxList;
  }

  onScroll(){
    console.log('loading...')
    this.emailService.currentEmailLength +=10;
    this.emailService.getEmailInbox();
    this.emailList = this.emailService.emailInboxList;
  }

}
