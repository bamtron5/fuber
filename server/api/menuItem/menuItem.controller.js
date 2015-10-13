'use strict';

var _ = require('lodash');
var MenuItem = require('./menuItem.model');

// Get list of menuItems
exports.index = function(req, res) {
  MenuItem.find(function (err, menuItems) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(menuItems);
  });
};

// Get a single menuItem
exports.show = function(req, res) {
  MenuItem.find({menuId: req.params.id}, function(err, menuItem){
      if(err) { return handleError(res, err); }
      if(!menuItem) { return res.status(404).send('Not Found'); }
      return res.json(menuItem);
  }).limit(1);
};

// Creates a new menuItem in the DB.
exports.create = function(req, res) {
  MenuItem.create(req.body, function(err, menuItem) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(menuItem);
  });
};

// Updates an existing menuItem in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MenuItem.findById(req.params.id, function (err, menuItem) {
    if (err) { return handleError(res, err); }
    if(!menuItem) { return res.status(404).send('Not Found'); }
    var updated = _.merge(menuItem, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(menuItem);
    });
  });
};

// Deletes a menuItem from the DB.
exports.destroy = function(req, res) {
  MenuItem.findById(req.params.id, function (err, menuItem) {
    if(err) { return handleError(res, err); }
    if(!menuItem) { return res.status(404).send('Not Found'); }
    menuItem.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}