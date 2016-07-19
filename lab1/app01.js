var request = require('request');

request.get('http://www.google.com', function(err, res, body) {
  console.dir(res.headers);
  console.dir(body);
});
