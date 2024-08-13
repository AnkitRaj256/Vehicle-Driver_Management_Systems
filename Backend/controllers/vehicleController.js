const Vehicle = require('../models/Vehicle');
const Driver = require('../models/Driver');

exports.assignDriverToVehicle = async (req, res) => {
    try {
        const { vehicleId, driverId } = req.body;
        const driver = await Driver.findOne({ driverId });
        if (!driver) return res.status(404).json({ message: 'Driver not found' });

        const vehicle = await Vehicle.findOneAndUpdate(
            { vehicleId },
            { driverAssigned: driver._id },
            { new: true }
        ).populate('driverAssigned');

        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error assigning driver to vehicle', error });
    }
};
