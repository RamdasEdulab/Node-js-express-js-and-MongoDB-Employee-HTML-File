const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    image:{type:String,
        required: 'This field is required.'
    },
    summary: {
        type: String,
        required: 'This field is required.'
    }, 
});

mongoose.model('Employee', employeeSchema);