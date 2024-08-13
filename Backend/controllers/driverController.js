const Driver = require('../models/Driver');

exports.createDriver = async (req, res) => {
    try {
        const { driverId, name, email, phone } = req.body;
        const newDriver = new Driver({ driverId, name, email, phone });
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(500).json({ message: 'Error creating driver', error });
    }
};
