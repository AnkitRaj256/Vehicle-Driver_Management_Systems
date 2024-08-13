const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    driverId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
