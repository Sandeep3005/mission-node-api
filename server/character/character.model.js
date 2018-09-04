const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const characterSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    isAlive: {
        type: Boolean
    },
    nationality: {
        type: String,
        trim: true
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    parents: {
        fatherName: {
            type: String,
            trim: true
        },
        motherName: {
            type: String,
            trim: true
        },
    },
    maritialStatus: {
        type: String,
        enum: [ 'Married', 'Divorced', 'Seperated', 'Single', 'Widowed']
    },
    portrayedBy: {
        type: {
            firstName: String,
            lastName: String,
        },    
        required: true
    },
    movieAppearedIn: {
        type: [ObjectId]
    },
});

module.exports = mongoose.model('character', characterSchema);