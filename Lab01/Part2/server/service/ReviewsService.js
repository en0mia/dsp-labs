'use strict';


/**
 * Get the reviews of a public film or private film owned by self
 *
 * filmId Integer 
 * returns reviews
 **/
exports.filmsFilmIdReviewsGET = function(filmId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviewerId" : 6,
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 1,
  "completed" : true
}, {
  "reviewerId" : 6,
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 1,
  "completed" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Issue a new invitation to review a film
 *
 * filmId Integer 
 * no response value expected for this operation
 **/
exports.filmsFilmIdReviewsPOST = function(filmId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Issue invitation for all the unreviewed films owned by self, in a balanced manner
 *
 * returns List
 **/
exports.reviewsAssignmentPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviewerId" : 6,
  "filmId" : 0
}, {
  "reviewerId" : 6,
  "filmId" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the reviews for the logged in user
 *
 * page Integer Page to retrieve (optional)
 * numberOfElements Integer Number of elements per page (optional)
 * returns reviews
 **/
exports.reviewsGET = function(page,numberOfElements) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviewerId" : 6,
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 1,
  "completed" : true
}, {
  "reviewerId" : 6,
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 1,
  "completed" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a review invitation
 *
 * reviewId Integer 
 * no response value expected for this operation
 **/
exports.reviewsReviewIdDELETE = function(reviewId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the review of a public film or private film owned by self
 *
 * reviewId Integer 
 * returns review
 **/
exports.reviewsReviewIdGET = function(reviewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviewerId" : 6,
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 1,
  "completed" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a review
 *
 * body Review Review details
 * reviewId Integer 
 * no response value expected for this operation
 **/
exports.reviewsReviewIdPUT = function(body,reviewId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

