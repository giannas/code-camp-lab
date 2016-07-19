var request = require('request');

request.get('https://itunes.apple.com/search?term=blackkeys', function(err, res, body) {
  var itunes = JSON.parse(body);
  console.dir(itunes.resultCount);
});
