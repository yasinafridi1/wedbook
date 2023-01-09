const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    servicesList: {
        type: Object,
        required: true
    }
}, { timestamps: true });


const ServicesModel = mongoose.model('service', serviceSchema);

module.exports = ServicesModel;