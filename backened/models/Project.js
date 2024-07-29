const mongoose = require('mongoose');

const projectSchema=new mongoose.Schema({
    projectName: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        Date: Date.now
    },
    projectContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
        }
    ],
})

module.exports=mongoose.model("Project" ,projectSchema)