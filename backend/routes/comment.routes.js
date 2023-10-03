const express = require("express");
const app = express();

const commentRoute = express.Router();
const Comment = require("../model/comment"); // Change the variable name

const executeAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

commentRoute.route("/add-comment").post(
  executeAsync(async (req, res) => {
    const commentData = req.body;
    const newComment = await Comment.create(commentData); // Use a different variable name
    res.json(newComment);
  })
);

commentRoute.route("/").get(
  executeAsync(async (req, res) => {
    const comments = await Comment.find(); // Use a different variable name
    res.json(comments);
  })
);

commentRoute.route("/comment/:id").get(
  executeAsync(async (req, res) => {
    const comment = await Comment.findById(req.params.id); // Use a different variable name
    res.json(comment);
  })
);

commentRoute.route("/update-comment/:id").put(
  executeAsync(async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); // Use a different variable name
    res.json(updatedComment);
    console.log("Comment updated successfully!");
  })
);

commentRoute.route("/delete-comment/:id").delete(
  executeAsync(async (req, res) => {
    const deletedComment = await Comment.findByIdAndRemove(req.params.id); // Use a different variable name
    res.status(200).json({
      msg: "Comment deleted successfully",
      deletedComment,
    });
  })
);

module.exports = commentRoute;
