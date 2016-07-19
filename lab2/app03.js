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
    var rooms = res.body.items;

    rooms.forEach(function(room) {
      console.log('Room: "%s" ID: "%s"', room.title, room.id);
    });
  });
}

getRooms();
