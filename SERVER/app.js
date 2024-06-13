const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongosanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const xss = require('xss-clean');

const cors = require('cors');

const app = express();


app.use(mongosanitize());
app.use(xss());

app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE, PATCH',
    credentials: true,
  }
));

app.use(express.json({ limit: '10kb' }));
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());


if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!'
});


app.use('/tawk', limiter);

app.use(express.urlencoded({ extended: true }));


module.exports = app;