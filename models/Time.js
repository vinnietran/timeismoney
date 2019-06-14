const mongoose = require('mongoose');

const TimeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        refer: 'users'
    }, 
    month: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('time', TimeSchema);