'use strict';
var express = require('express');
var router = express.Router();
router.use('/students', require('./students'));

module.exports = router;
