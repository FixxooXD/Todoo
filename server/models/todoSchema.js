const mongoose = require("mongoose")

 const todoSchema = mongoose.Schema(
    {
            user:{
                // userId : {
                //     type: Number,
                //     required: [true, "Enter the userID"],
                //     unique: [true, "Enter a Unique userId"]
                // },
                userName :{
                    type: String,
                    required: [true, "Enter the userID"],
                    unique: [true, "Enter a Unique userId"]
                }, 
                userPassword: {
                    type: String,
                    required: [true, "Enter the userPassword"]
                }
            }
        ,
        todo:[{
            task: {
                type: String,
                unique: [true, "Enter a Unique userId"]
            },
            isEditing: {
                type: Boolean,
            },
            isComplete: {
                type: Boolean,
            },
        }]
    },
    {
        timestamps: true
    }
)

const Todos = mongoose.model("Todos", todoSchema)

module.exports = Todos;