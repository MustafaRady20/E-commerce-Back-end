const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: 'config.env' });
const dbConnection = require('./config/db');
const categoryRoute = require('./routes/categoryRoute');

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

app.all("*", (req, res, next) => {
  const err = new Error(`can't find this route ${req.originalUrl}`)
  next(err)
})

app.use((err, req, res, next) => {
  res.status(400).json({ err: err.message })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});