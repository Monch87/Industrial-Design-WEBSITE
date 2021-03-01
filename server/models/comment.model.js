const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        title: String,
        comment: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Comment", commentSchema);
