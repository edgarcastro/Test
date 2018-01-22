"use strict";

const Specialty = require('../models/Specialty').Model;

function getSpecialties(req, res) {
    const query = req.query;
    Specialty.find({})
        .limit((query.limit) ? +query.limit : 0)
        .skip((query.skip) ? +query.skip : 0)
        /* .sort((query.sort) ? query.sort : {}) */
        .exec()
        .then(specialties => {
            res.status(200).json(
                specialties
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

function getSpecialty(req, res) {
    const params = req.params;
    Specialty.findOne({
            "_id": +params.id
        })
        .exec()
        .then(specialty => {
            res.status(200).json(
                specialty
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

function postSpecialty(req, res) {
    const body = req.body;
    try {
        const specialty = new Specialty(body);
        specialty.save()
            .then(specialty => {
                res.status(200).json(
                    specialty
                );
            })
            .catch(e => {
                res.status(500).json(e);
            });
    } catch (e) {
        res.status(400).json(e);
    }
}

function patchSpecialty(req, res) {
    const params = req.params;
    const body = req.body;
    try {
        Specialty.where({
                "_id": params.id
            })
            .findOneAndUpdate(body)
            .setOptions({
                "new": true
            })
            .exec()
            .then(specialty => {
                res.status(200).json(
                    specialty
                );
            })
            .catch(e => {
                res.status(500).json(e);
            });
    } catch (e) {
        res.status(400).json(e);
    }
}

function deleteSpecialty(req, res) {
    const params = req.params;
    Specialty.findOneAndRemove({
            "_id": params.id
        })
        .exec()
        .then(specialty => {
            res.status(200).json(
                specialty
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

module.exports = {
    getSpecialties,
    getSpecialty,
    postSpecialty,
    patchSpecialty,
    deleteSpecialty
};