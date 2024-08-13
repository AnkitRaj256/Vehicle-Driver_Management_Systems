const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/assign', vehicleController.assignDriverToVehicle);

module.exports = router;
