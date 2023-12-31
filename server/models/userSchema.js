const mongoose = require("mongoose")

 const userSchema = mongoose.Schema(
    {
        user:{
            userId : {
                type: Number,
                required: [true, "Enter the userID"],
                unique: [true, "Enter a Unique userId"]
            },
            userName:{
                type: String,
                required: [true, "Enter the userID"],
                unique: [true, "Enter a Unique userId"]
            }, 
            userPassword: {
                type: String,
                required: [true, "Enter the userPassword"]
            }
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User;