/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sdp = require('./sdp.model');

exports.register = function(socket) {
  Sdp.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sdp.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sdp:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sdp:remove', doc);
}