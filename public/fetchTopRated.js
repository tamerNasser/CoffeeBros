function getTopRatedPlaces(num, cb) {
console.log(num);
  fetch('/toprated?limit=' + num)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data);
      cb(data);
    })
    .catch(function(error) {
      return error;
    })
}
