const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: {
    type: String,
  },
  id: {
    type: Number,
  },
  post_name: {
    type: String,
  },
  post_date: {
    type: String,
  },
  post_body: {
    type: String,
  },
  post_image: {
    type: String,
  },
  post_categoryId: {
    type: Number,
  },
  post_userId: {
    type: Number,
  },
  userComments: {
    type: [Number],
  },
});

module.exports = mongoose.model("Post", postSchema);
