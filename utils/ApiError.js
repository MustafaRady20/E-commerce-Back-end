class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.error = `${statusCode}`.startsWith("4") ? "Fail" : "Error";
        this.isOperational = true
    }
}


module.exports = ApiError