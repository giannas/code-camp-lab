var request = require('request');

function searchItunes(name) {
  var rOpt = {
    url: 'https://itunes.apple.com/search',
    qs: { term: name },
    method: 'get',
    json: true
  };

  request(rOpt, function(err, res, body) {
    var itunes = res.body;
    var tracks =  itunes.results.forEach(function(result) {
      console.log('Artist: "%s" Album: "%s" Track: "%s"', result.artistName, result.collectionName, result.trackName);
    });
  });
}

if(process.argv && process.argv.length > 2) {
  searchItunes(process.argv[2]);
} else {
  console.log('No serach term specified!');
}
