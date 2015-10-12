'use strict';

var _ = require('lodash');
var Sdp = require('./sdp.model');

// Get list of sdps
exports.index = function(req, res) {
  Sdp.find(function (err, sdps) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(sdps);
  });
};

// Get a single sdp
exports.show = function(req, res) {
  Sdp.findById(req.params.id, function (err, sdp) {
    if(err) { return handleError(res, err); }
    if(!sdp) { return res.status(404).send('Not Found'); }
    return res.json(sdp);
  });
};

// Creates a new sdp in the DB.
exports.create = function(req, res) {
  Sdp.create(req.body, function(err, sdp) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sdp);
  });
};

// Updates an existing sdp in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sdp.findById(req.params.id, function (err, sdp) {
    if (err) { return handleError(res, err); }
    if(!sdp) { return res.status(404).send('Not Found'); }
    var updated = _.merge(sdp, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(sdp);
    });
  });
};

// Deletes a sdp from the DB.
exports.destroy = function(req, res) {
  Sdp.findById(req.params.id, function (err, sdp) {
    if(err) { return handleError(res, err); }
    if(!sdp) { return res.status(404).send('Not Found'); }
    sdp.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}