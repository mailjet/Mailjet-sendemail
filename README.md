# mailjet-sendemail
This library permits to send emails using Mailjet's API in Node.js. It's MIT licensed.

## Installation
```bash
npm install mailjet-sendemail
```

## Initialization

Access to the API is done through a Mailjet object. It's instantiated like so:

```javascript
var Mailjet = require('mailjet-sendemail');
var mailjet = new Mailjet('apiKey', 'secretKey');
```

## Sending Email

### sendContent

Sends an email.

```javascript
mailjet.sendContent(from, to, subject, content);
```

* from - Sender of the message; this should be a full email address (e.g. ```example@example.com```).
* to - A string (example@example.com) or array of strings (['a@example.com', 'b@example.com']) of recipients. For cc and bcc support, append cc: or bcc: to the recipient email address (cc:example@example.com).
* subject - Message subject
* text - Message body text

### Examples

With plain text :

```javascript
mailjet.sendContent('sender@example.com',
         ['recipient1@example.com', 'bcc:recipient2@example.com'],
         'This is a test !',
         'Well, this is working !',
         0)
```

With HTML :

```javascript
mailjet.sendContent('sender@example.com',
         ['recipient1@example.com', 'bcc:recipient2@example.com'],
         'This is a test !',
         '<b>Well, this is working !</b>',
         1)
```
