function errorResponder(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const status = error.statusCode || error.status || 500;
  response.status(status).json(error.message);
}

module.exports = { errorResponder };
