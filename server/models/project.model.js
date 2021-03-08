const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        startedProject: {
            type: Date,
            required: true
        },
        endedProject: {
            type: Date
        },
        description: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        imageUrl: String
        // ,review: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Project", projectSchema);



