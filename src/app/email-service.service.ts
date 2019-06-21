import { Injectable } from '@angular/core';
import { EmailDetailModel } from './models/emailDetail.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailInboxList: EmailDetailModel[] = new Array<EmailDetailModel>();
  currentEmailLength: number = 0;

  tmpData = [
    {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }, {
      "from": {
        "name": "Now TV",
        "email": "nowtv@test.com"
      },
      "subject": "Grab another Pass, you need to be watching this...",
      "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from": {
        "name": "Investopedia Terms",
        "email": "investopedia@test.com"
      },
      "subject": "What is 'Fibonanci Retracement'?",
      "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from": {
        "name": "ASICS Greater Manchester Marathon ",
        "email": "events@human-race.co.uk"
      },
      "subject": "Your chance to take on the marathon",
      "body": "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    }
  ];

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

      let startDate = new Date(2017, 0, 1).getTime();
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
