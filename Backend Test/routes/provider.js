"use strict";

const express = require('express');
const provider = require('../controllers/provider');

let router = express.Router();

router.get('/providers', provider.getProviders);
router.get('/providers/:id', provider.getProvider);
router.post('/providers', provider.postProvider);
router.patch('/providers/:id', provider.patchProvider);
router.delete('/providers/:id', provider.deleteProvider);

module.exports = router;