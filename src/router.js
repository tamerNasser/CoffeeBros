const fs = require('fs');
const path = require('path');
const handlers = require('./handlers');

const router = (request, response) => {
  const url = request.url;

  if (url === '/') {
    handlers.handleHome(request, response);
  } else {
    response.writeHead(404);
    response.end('Not Found')
  }
};

module.exports = router;
