"use strict";

const mongoose = require('mongoose');
const SpecialtySchema = require('./Specialty').Schema;

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    middleName: {
        type: String
    },
    email: {
        type: String
    },
    projectedStartDate: {
        type: Date
    },
    employerId: {
        type: Number
    },
    providerType: {
        type: String
    },
    staffStatus: {
        type: String
    },
    assignedTo: {
        type: Number
    },
    status: {
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
    },
    specialty: {
        type: SpecialtySchema
    },
    __v: {
        type: Number
    }
}, {
    collection: 'providers'
});

module.exports = {
    Model: mongoose.model('providers', schema),
    Schema: schema
};