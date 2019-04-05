const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session')
const setupPassport = require('./passport')
const port = process.env.PORT || 4000
const apiRoutes = require('./routes/api')
const dbUrl = 'mongodb://localhost/online-cart';

process.on('uncaughtException', err => console.error(err))
process.on('unhandledRejection', err => console.error(err))
mongoose.Promise = global.Promise
mongoose.connect(dbUrl)
const db = mongoose.connection

db.on('error', function (err) {
  console.error('Mongoose error', err)
})

db.once('open', function () {
  console.log("Connected To", dbUrl)
  
  const app = express();
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors())
  app.use('/api', apiRoutes(passport))

  setupPassport(passport)

  // Setting the static folder
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('./build')))
    app.use(function (req, res) {
      res.sendFile(path.resolve('./build/index.html'))
    })
  }

  app.listen(port, function () {
    console.log(`Server started in port ${port}`)
  })
})