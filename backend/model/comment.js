const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  id: {
    type: Number,
  },
  comment_name: {
    type: String,
  },
 comment_userId: {
    type: Number,
  },
  comment_postId: {
    type: Number,
  },
  comment_date: {
    type: String,
  },
  comment_body: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);

