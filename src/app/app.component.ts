import { Component } from '@angular/core';
import { EmailService } from './email-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private emailService : EmailService
  ) {}

  title = 'email-inbox-test';

  ngOnInit(): void {
    this.emailService.emailInboxList = this.emailService.getEmailInbox();
  }
}
