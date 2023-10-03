const express = require("express");
const app = express();

const commentRoute = express.Router();
const Comment = require("../model/comment");

const executeAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

commentRoute.route("/add-comment").post(
  executeAsync(async (req, res) => {
    const commentData = req.body;
    const newComment = await Comment.create(commentData);
    res.json(newComment);
  })
);

commentRoute.route("/").get(
  executeAsync(async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
  })
);

commentRoute.route("/comment/:id").get(
  executeAsync(async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  })
);

commentRoute.route("/update-comment/:id").put(
  executeAsync(async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedComment);
    console.log("Comment updated successfully!");
  })
);

commentRoute.route("/delete-comment/:id").delete(
  executeAsync(async (req, res) => {
    const deletedComment = await Comment.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: "Comment deleted successfully",
      deletedComment,
    });
  })
);

module.exports = commentRoute;
