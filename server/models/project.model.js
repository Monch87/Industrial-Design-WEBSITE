const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        title: String,
        started_Date: Date,
        ended_Date: Date,
        description: String,
        imageUrl: String,
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
