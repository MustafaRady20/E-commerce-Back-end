const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: '.env' });
const dbConnection = require('./config/db');
const ErrorHandler = require("./middleware/ErrorHandler")
const ApiError = require("./utils/ApiError")
const categoryRoute = require('./routes/categoryRoute');
const subCategoryRoutes = require("./routes/subCategoryRoutes")
// Connect with db
dbConnection();

// express app
const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use('/api/v1/categories', categoryRoute);
app.use("/api/v1/subcategories", subCategoryRoutes)
app.all("*", (req, res, next) => {
  const err = new ApiError(`Can't Find This route ${req.originalUrl}`, 400)
  next(err)
})

app.use(ErrorHandler)

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  console.error(`...unhandledRejection .. ${err.name}-${err.message}`)
  server.close(() => {
    console.log("Shutting down")
    process.exit(1)
  })
})