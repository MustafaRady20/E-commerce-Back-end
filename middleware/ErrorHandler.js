const ErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 400;
    err.status = err.status || "Error"
    if (process.env.NODE_ENV == "development") {
        sendErrorForDev(err, res)
    } else {
        sendErrorForProd(err, res)
    }
}


const sendErrorForDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    })
}


const sendErrorForProd = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}


module.exports = ErrorHandler