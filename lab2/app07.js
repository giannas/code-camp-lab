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

function getMessages(roomId, callback) {
  // set spark api url for this request
  sparkOpt.url = sparkAPI + 'messages';
  sparkOpt.qs = {roomId: roomId};

  // request messages
  request.get(sparkOpt, function(err, res, body) {
    var messages = res.body.items;
    callback(err, messages);
  });
}

function sendMessage(roomId, message, callback) {
  // set spark api url for this request
  sparkOpt.url = sparkAPI + 'messages';
  sparkOpt.body = {
    roomId: roomId,
    text: message
  };

  // send message
  request.post(sparkOpt, function(err, res, body) {
    var message = res.body;
    callback(err, message);
  });
}

sendMessage('<roomId>', 'Hello Room!', function(err, message) {
  if(!err) {
    console.log('message sent!');
  }
});
