'use strict';

var utils = require('../utils/writer.js');
var Reviews = require('../service/ReviewsService');

module.exports.filmsFilmIdReviewsGET = function filmsFilmIdReviewsGET (req, res, next, filmId) {
  Reviews.filmsFilmIdReviewsGET(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filmsFilmIdReviewsPOST = function filmsFilmIdReviewsPOST (req, res, next, filmId) {
  Reviews.filmsFilmIdReviewsPOST(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsAssignmentPOST = function reviewsAssignmentPOST (req, res, next) {
  Reviews.reviewsAssignmentPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsGET = function reviewsGET (req, res, next, page, numberOfElements) {
  Reviews.reviewsGET(page, numberOfElements)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsReviewIdDELETE = function reviewsReviewIdDELETE (req, res, next, reviewId) {
  Reviews.reviewsReviewIdDELETE(reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsReviewIdGET = function reviewsReviewIdGET (req, res, next, reviewId) {
  Reviews.reviewsReviewIdGET(reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsReviewIdPUT = function reviewsReviewIdPUT (req, res, next, body, reviewId) {
  Reviews.reviewsReviewIdPUT(body, reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
