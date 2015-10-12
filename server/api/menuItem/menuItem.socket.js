/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var MenuItem = require('./menuItem.model');

exports.register = function(socket) {
  MenuItem.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  MenuItem.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('menuItem:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('menuItem:remove', doc);
}