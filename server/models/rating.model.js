const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        title_project: String,
        rating: Number,
        comment: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Rating", ratingSchema);
