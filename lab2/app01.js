var request = require('request');

var sparkAPI = 'https://api.ciscospark.com/v1/';
var sparkOpt = {
  auth: { bearer: '<token>' },
  json: true
};

function getRooms() {
  // set spark api url for this request
  sparkOpt.url = sparkAPI + 'rooms';

  // request rooms
  request.get(sparkOpt, function(err, res, body) {
    console.dir(res.body);
  });
}

getRooms();
