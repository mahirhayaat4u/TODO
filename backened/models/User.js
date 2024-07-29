const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
        trim: true,
    }, 
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        enum: ['Admin', 'Student', 'Instructor'],
        required: true
    },
    token: {
        type : String,
    },
    // projects: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Course",
    //     }
    // ],

})

module.exports = mongoose.model("User", userSchema);