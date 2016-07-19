var request = require('request');

var sparkAPI = 'https://api.ciscospark.com/v1/';
var sparkOpt = {
  auth: { bearer: '<token>' },
  json: true
};

function getRooms(callback) {
  // set spark api url for this request
  sparkOpt.url = sparkAPI + 'rooms';

  // request rooms
  request.get(sparkOpt, function(err, res, body) {
    var rooms = res.body.items;
    callback(err, rooms);
  });
}

function getRoom(roomId, callback) {
  // set spark api url for this request
  sparkOpt.url = sparkAPI + 'rooms/' + roomId;

  // request room
  request.get(sparkOpt, function(err, res, body) {
    var room = res.body;
    callback(err, room);
  });
}

getRoom('<roomId>', function(err, room) {
  if(!err) {
    console.log('Room: "%s" ID: "%s"', room.title, room.id);
  }
});
