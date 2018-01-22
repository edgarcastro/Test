"use strict";

const mongoose = require('mongoose');
const express = require('express');
const config = require('./config');
const app = require('./app');
mongoose.Promise = global.Promise;

// Create the database connection
mongoose.connect(config.DB_URI, {});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  app.listen(config.PORT, () => {
    console.log("Ejecutando en el puerto " + config.PORT);
  });
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});