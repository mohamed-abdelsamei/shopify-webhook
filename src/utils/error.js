class CustomError extends Error {
  constructor(message, status = 500) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || 'Something went wrong. Please try again.';
    this.status = status;
  }
}

module.exports = CustomError;
