const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        username: {
            type: String,
            required: true,  //El campo es obligatorio
            unique: true, //El elemento debe ser unico y no repetirse
            trim: true //Los espacios serán eliminados
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: '//cloudinary//',
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN','PARTNER'],
            default: 'USER'
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
