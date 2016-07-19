var request = require('request');

request.get('https://itunes.apple.com/search?term=blackkeys', function(err, res, body) {
  console.dir(res.headers);
  console.dir(body);
});
