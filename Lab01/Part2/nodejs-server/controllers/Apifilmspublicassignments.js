'use strict';

var utils = require('../utils/writer.js');
var Apifilmspublicassignments = require('../service/ApifilmspublicassignmentsService');

module.exports.assignReviewBalanced = function assignReviewBalanced (req, res, next) {
  Apifilmspublicassignments.assignReviewBalanced()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
