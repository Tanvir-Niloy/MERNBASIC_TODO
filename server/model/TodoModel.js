const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({

    text:{

        type:String,
        required:true
    },
    isCompleted:{

        type:Boolean
    }
})


const TodoModel = mongoose.model("Todo",TodoSchema)

module.exports = TodoModel