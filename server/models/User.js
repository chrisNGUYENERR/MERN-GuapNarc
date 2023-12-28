const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        checkTerms: { type: Boolean, required: true },
        itemList: Array
    },
    { collection: 'users'}
);

module.exports = mongoose.model('User', UserSchema);