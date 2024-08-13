const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/create', driverController.createDriver);

module.exports = router;
