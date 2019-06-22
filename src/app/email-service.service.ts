import { Injectable } from '@angular/core';
import { EmailDetailModel } from './models/emailDetail.model';
import * as data from './simple-email-list.json';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailInboxList: EmailDetailModel[] = new Array<EmailDetailModel>();
  currentEmailLength: number = 0;

  tmpData = data.emailList;

  constructor() { }

  getEmailInbox() {

    for (let i = 0; i < 10; i++) {

      let email = this.tmpData[i + this.currentEmailLength];
      console.log('email ' + (i + this.currentEmailLength) + ' => ', email);

      if (!email) {
        break;
      }

      let newEmail = new EmailDetailModel();

      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      let tmpName = email.from.name.split(' ');

      newEmail.from = email.from;
      newEmail.subject = email.subject;
      newEmail.body = email.body;
      newEmail.iconColor = color;

      for (let y of tmpName) {
        if (newEmail.iconName.length != 2) {
          newEmail.iconName += y[0];
        }
        else {
          break;
        }
      }

      let startDate = new Date(2019, 0, 1).getTime();
      let endDate = new Date().getTime();
      let spaces = (endDate - startDate);
      let timestamp = Math.round(Math.random() * spaces);
      timestamp += startDate;
      newEmail.time = new Date(timestamp);

      this.emailInboxList.push(newEmail);
    }


    return this.emailInboxList;
  }
}
