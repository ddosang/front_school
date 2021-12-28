const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    image: String,
    publishedDate: String,
    likeCount: {
        type: Number,
        default: 0
    },
    likeUser: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    },
    user: {
        // user 정보를 기반으로 가져옴.
        _id: mongoose.Types.ObjectId, 
        username: String
    }
});

module.exports = mongoose.model("post", postSchema);