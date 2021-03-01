const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
        Started_Date: Date,
        End_Date: Date,
        customer: { 
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
            unique: true, 
        },
        review: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Project", projectSchema);
