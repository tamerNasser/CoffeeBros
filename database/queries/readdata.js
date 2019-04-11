const selectquery = require('./selectquery');



const getReviews = (cb) => selectquery('SELECT * from review;', cb)
const getPlaces = (cb) => selectquery('SELECT * from places;',cb)
const getAddressByID = (placeid,cb) => selectquery(`SELECT * from address where id =${placeid};`, cb)
const getPlacesByName = (name,cb) => selectquery(`SELECT * from places where name LIKE '%${name}%';`,cb)
const getLatestReviews = (num,cb) => selectquery(`SELECT * from review ORDER BY id DESC LIMIT ${num};`, cb)
const getReviewByPlaceID = (placeID,cb) => selectquery(`SELECT * from review where place_id=${placeID};`,cb)
const getPlaceDetailsByID = (placeID,cb) => selectquery(`SELECT * from places where id=${placeID};`,cb)
const getPicturesByPlaceID = (placeID,cb) => selectquery(`SELECT * from pictures where place_id=${placeID};`,cb)
const getMapByPlaceID = (placeID,cb) => selectquery(`SELECT googlemap from address where id=${placeID};`,cb)
const getTopPlaces = (n,cb) => selectquery(`SELECT * from places ORDER BY rating DESC LIMIT ${n} ;`,cb)

module.exports = {
  getReviews,
  getPlaces,
  getAddressByID,
  getPlacesByName,
  getLatestReviews,
  getReviewByPlaceID,
  getPlaceDetailsByID,
  getPicturesByPlaceID,
  getMapByPlaceID,
  getTopPlaces
}
