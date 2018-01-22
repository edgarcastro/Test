"use strict";

const express = require('express');
const specialty = require('../controllers/specialty');

let router = express.Router();

router.get('/specialties', specialty.getSpecialties);
router.get('/specialties/:id', specialty.getSpecialty);
router.post('/specialties', specialty.postSpecialty);
router.patch('/specialties/:id', specialty.patchSpecialty);
router.delete('/specialties/:id', specialty.deleteSpecialty);

module.exports = router;