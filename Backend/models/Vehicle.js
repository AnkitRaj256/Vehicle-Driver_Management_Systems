const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleId: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    driverAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', default: null }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
