//Error Handler Class
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode; //Set Status Code for Response


        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;