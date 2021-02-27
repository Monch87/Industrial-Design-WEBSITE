const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Project", projectSchema);
