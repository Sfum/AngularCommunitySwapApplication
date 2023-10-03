const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

  id: {
    type: Number,
  },
  post_name: {
    type: String,
  },
  post_categoryId: {
    type: Number,
  },
  post_userId: {
    type: Number,
  },
  post_date: {
    type: Date,
  },
  post_image: {
    type: String,
  },
  post_body: {
    type: String,
  },
  userComments: {
    type: [Number],
  },
});

module.exports = mongoose.model("Post", postSchema);
