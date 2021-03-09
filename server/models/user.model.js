const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,  
            unique: true,
            trim: true 
        },
        password: {
            type: String,
            required: true
        },
        // avatar: {
        //     type: String,
        //     default: 'https://res.cloudinary.com/dxslsbznp/image/upload/v1615285562/avatarDefault_ex5uea.png',
        // },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
