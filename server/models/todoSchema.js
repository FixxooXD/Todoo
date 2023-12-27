const mongoose = require("mongoose")

 const todoSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "Enter the ID"],
            unique: [true, "Enter a Unique ID"]
        },
        task: {
            type: String,
            required: [true, "Enter a Task"],
        },
        isEditing: {
            type: Boolean,
            required: true,
        },
        isComplete: {
            type: Boolean,
            required: true,
        },  
    },
    {
        timestamps: true
    }
)

const Todos = mongoose.model("Todos", todoSchema)

module.exports = Todos;