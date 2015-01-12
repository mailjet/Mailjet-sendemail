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
mailjet.sendContent(from, to, subject, type, content);
```

* from - Sender of the message; this should be a full email address (e.g. ```example@example.com```).
* to - A string (example@example.com) or array of strings (['a@example.com', 'b@example.com']) of recipients. For cc and bcc support, append cc: or bcc: to the recipient email address (cc:example@example.com).
* subject - Message subject
* type - The type of the email, 'text' or 'html'
* content - Message content, depending on the type

### Examples

With plain text :

```javascript
mailjet.sendContent('sender@example.com',
         ['recipient1@example.com', 'bcc:recipient2@example.com'],
         'This is a test !',
         'text',
         'Well, this is working !')
```

With HTML :

```javascript
mailjet.sendContent('sender@example.com',
         ['recipient1@example.com', 'bcc:recipient2@example.com'],
         'This is a test !',
         'html',
         '<b>Well, this is working !</b>')
```
