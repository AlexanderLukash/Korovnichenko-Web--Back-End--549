function logRequest(request, response, next) {
  console.log(`Received a ${request.method} request to ${request.url}`);
  next();
}

function blockSpecialBrand(request, response, next) {
  if (request.params.brand === 'Brand C') {
    return response.status(403).send('Unavailable Brand');
  }
  next();
}

module.exports = { logRequest, blockSpecialBrand };
