const express = require("express");
const app = express();

const postRoute = express.Router();
let Post = require("../model/post");

const executeAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

postRoute.route("/add-post").post(
  executeAsync(async (req, res) => {
    const postData = req.body;
    const post = await Post.create(postData);
    res.json(post);
  })
);

postRoute.route("/").get(
  executeAsync(async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
  })
);

postRoute.route("/post/:id").get(
  executeAsync(async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
  })
);

postRoute.route("/update-post/:id").put(
  executeAsync(async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedPost);
    console.log("Post updated successfully!");
  })
);

postRoute.route("/delete-post/:id").delete(
  executeAsync(async (req, res) => {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: "Post deleted successfully",
      deletedPost,
    });
  })
);

module.exports = postRoute;
