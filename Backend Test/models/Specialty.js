"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String
  },
  createdBy: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedBy: {
    type: Number
  },
  updatedAt: {
      type: Date
  }
}, {
  collection: 'specialties'
});

module.exports = {
  Model: mongoose.model('specialties', schema),
  Schema: schema
};