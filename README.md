# Welcome to the SMS-sender-fetchAPI repository!

Before starting you should learn about sending SMS via email. If I wanted to send SMS to +1(530)301-6604, I would need to know which carrier this number belongs to. It's the AT&T number. Then I would need to know the gateway that needs to be used to send SMS/MMS. In the case of AT&T, the email address would be 5303016604@mms.att.net. Here is [the list of gateways](https://www.opentextingonline.com/emailtotext.aspx).

## Here is a code that could be used to send SMS/MMS to 5303016604 or any other AT&T phone number
    fetch('https://marinmover.com/email_sender/php/email_sender.php', {
          method: 'POST',
          'Accept': 'application/json',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'email_message=' + JSON.stringify({
                'mail_to': '5303016604@mms.att.net',
                'mail_subject': 'Test1',
                'mail_message': 'Great. It works!'
          })
      }).then(response => response.json()).then(data => {
          if (data.result == 'success') {
              result.innerHTML = `SMS was successfully sent to 5303016604`;
              console.log(data);
          }
          else
              result.innerHTML = 'Error sending a message!';

      }).catch(err => {
        console.log(err);
      });
