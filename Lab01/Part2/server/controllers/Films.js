'use strict';

var utils = require('../utils/writer.js');
var Films = require('../service/FilmsService');

module.exports.filmsFilmIdDELETE = function filmsFilmIdDELETE (req, res, next, filmId) {
  Films.filmsFilmIdDELETE(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filmsFilmIdGET = function filmsFilmIdGET (req, res, next, filmId) {
  Films.filmsFilmIdGET(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filmsFilmIdPUT = function filmsFilmIdPUT (req, res, next, body, filmId) {
  Films.filmsFilmIdPUT(body, filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filmsGET = function filmsGET (req, res, next, page, numberOfElements) {
  Films.filmsGET(page, numberOfElements)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filmsPOST = function filmsPOST (req, res, next, body) {
  Films.filmsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
