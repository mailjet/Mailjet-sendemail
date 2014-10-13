var http = require('http')
  , querystring = require('querystring');

var mail_parser = require('./mail-parser');

// Initialization class
var Mailjet = function(apiKey, secretKey) {
  this._apiKey = apiKey;
  this._secretKey = secretKey;
  this._authentificate = new Buffer(apiKey + ':' + secretKey).toString('base64');
};

Mailjet.prototype = {};

// Email sending code
Mailjet.prototype.sendContent = function(from, to, subject, type, content) {

  if (arguments.length < 4)
    throw new Error('Missing required argument');

  if (typeof(to) == 'string')
      to = [to];
  var recipients = mail_parser.parse_recipient_type(to);
  // Build the HTTP POST body text

  if (type == 'html') {
      var body = querystring.stringify({
        from: from,
        // Handle many destinations
        to: recipients['to'].join(', '),
        cc: recipients['cc'].join(', '),
        bcc: recipients['bcc'].join(', '),
        subject: subject,
        html: content
      });
  }
  else if (type == 'text') {
      var body = querystring.stringify({
        from: from,
        // Handle many destinations
        to: recipients['to'].join(', '),
        cc: recipients['cc'].join(', '),
        bcc: recipients['bcc'].join(', '),
        subject: subject,
        text: content
      });
  }
  else {
      throw new Error('Wrong email type');
  }

  var options = {
    hostname: 'api.mailjet.com',
    port: 80,
    path: '/v3/send/',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + this._authentificate,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body)
    }
  };

  // API request
  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  // Checking errors
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // Send the body
  console.log(body);
  req.end(body);
};

module.exports = Mailjet;
