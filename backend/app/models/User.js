const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'customer'
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });


const User = mongoose.model('user', userSchema);

module.exports = User;