"use strict";

const Provider = require('../models/Provider').Model;

function getProviders(req, res) {
    const query = req.query;
    Provider.find({})
        .limit((query.limit) ? +query.limit : 0)
        .skip((query.skip) ? +query.skip : 0)
        /* .sort((query.sort) ? query.sort : {}) */
        .exec()
        .then(providers => {
            res.status(200).json(
                providers
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

function getProvider(req, res) {
    const params = req.params;
    Provider.findOne({
            "_id": +params.id
        })
        .exec()
        .then(provider => {
            res.status(200).json(
                provider
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

function postProvider(req, res) {
    const body = req.body;
    try {
        const provider = new Provider(body);
        provider.save()
            .then(provider => {
                res.status(200).json(
                    provider
                );
            })
            .catch(e => {
                res.status(500).json(e);
            });
    } catch (e) {
        res.status(400).json(e);
    }
}

function patchProvider(req, res) {
    const params = req.params;
    const body = req.body;
    try {
        Provider.where({
                "_id": params.id
            })
            .findOneAndUpdate(body)
            .setOptions({
                "new": true
            })
            .exec()
            .then(provider => {
                res.status(200).json(
                    provider
                );
            })
            .catch(e => {
                res.status(500).json(e);
            });
    } catch (e) {
        res.status(400).json(e);
    }
}

function deleteProvider(req, res) {
    const params = req.params;
    Provider.findOneAndRemove({
            "_id": params.id
        })
        .exec()
        .then(provider => {
            res.status(200).json(
                provider
            );
        })
        .catch(e => {
            res.status(500).json(e);
        });
}

module.exports = {
    getProviders,
    getProvider,
    postProvider,
    patchProvider,
    deleteProvider
};