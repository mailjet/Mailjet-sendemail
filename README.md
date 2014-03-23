# mailjet-sendemail
This library permits to send emails using Mailjet's API in Node.js. It's MIT licensed.

# Installation
```
npm install mailjet-sendemail
```

# Initialization

Access to the API is done through a Mailjet object. It's instantiated like so:

```
var mailjet = new Mailjet('apiKey', 'secretKey');
```

# Sending Email

## sendText

Sends a simple plain-text email.

```
sendText(from, to, subject, text)
```

* from - Sender of the message; this should be a full email address (e.g. ```example@example.com```).
* to - A string (example@example.com) or array of strings (['a@example.com', 'b@example.com']) of recipients.
* subject - Message subject
* text - Message body text

### Example

```
sendText(sender@example.com,
         ['recipient1@example.com', 'recipient2@example.com'],
         'This is a test !',
         'Well, this is working !')
```
