import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';
import { EmailDetailModel } from '../models/emailDetail.model';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {

  emailList: EmailDetailModel[];
  filter: string = '';

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    // get initinal email list from email service.
    this.emailList = this.emailService.emailInboxList;
  }

  onScroll() {
    // get next 20 email when scroll to 80% of current screen;
    this.emailService.getEmailInbox();
    this.emailList = this.emailService.emailInboxList;
  }

  // email filter that trigger when filter select is changed
  doFilter() {
    switch (this.filter) {
      case 'N':
        // sort email by using email sender name
        this.emailList.sort((a, b) => a.from.name.localeCompare(b.from.name));
        break;
      case 'D':
        // sort email by using email arrive date
        this.emailList.sort((a, b) => (a.time > b.time ? -1 : 1));
        break;
      default:
        break;
    }
  }

}
