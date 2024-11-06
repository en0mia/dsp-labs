'use strict';


/**
 * Delete a film
 *
 * filmId Integer 
 * no response value expected for this operation
 **/
exports.filmsFilmIdDELETE = function(filmId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a single public film or private film owned by self
 *
 * filmId Integer 
 * returns film
 **/
exports.filmsFilmIdGET = function(filmId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : 6,
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 1,
  "id" : 0,
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a film
 *
 * body Film Film details
 * filmId Integer 
 * no response value expected for this operation
 **/
exports.filmsFilmIdPUT = function(body,filmId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the list of public films or private films owned by self
 *
 * page Integer Page to retrieve (optional)
 * numberOfElements Integer Number of elements per page (optional)
 * returns films
 **/
exports.filmsGET = function(page,numberOfElements) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : 6,
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 1,
  "id" : 0,
  "title" : "title",
  "favorite" : false
}, {
  "owner" : 6,
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 1,
  "id" : 0,
  "title" : "title",
  "favorite" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new film
 *
 * body Film Film details
 * no response value expected for this operation
 **/
exports.filmsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

