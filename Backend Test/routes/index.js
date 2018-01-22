"use strict";

const express = require('express');

var router = express.Router();

router.use('/v1', require('./provider'));
router.use('/v1', require('./specialty'));

module.exports = router;