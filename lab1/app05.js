var request = require('request');

var rOpt = {
  url: 'https://itunes.apple.com/search',
  qs: { term: 'blackkeys' },
  method: 'get',
  json: true
};

request(rOpt, function(err, res, body) {
  var itunes = res.body;
  var tracks =  itunes.results.forEach(function(result) {
    console.log(result.trackName);
  });
});
