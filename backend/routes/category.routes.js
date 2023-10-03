const express = require("express");
const app = express();

const categoryRoute = express.Router();
const category = require("../model/category");

const executeAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

categoryRoute.route("/add-category").post(
  executeAsync(async (req, res) => {
    const categoryData = req.body;
    const newCategory = await category.create(categoryData);
    res.json(newCategory);
  })
);

categoryRoute.route("/").get(
  executeAsync(async (req, res) => {
    const categories = await category.find();
    res.json(categories);
  })
);

categoryRoute.route("/category/:id").get(
  executeAsync(async (req, res) => {
    const category = await category.findById(req.params.id);
    res.json(category);
  })
);

categoryRoute.route("/update-category/:id").put(
  executeAsync(async (req, res) => {
    const updatedCategory = await category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedCategory);
    console.log("Category updated successfully!");
  })
);

categoryRoute.route("/delete-category/:id").delete(
  executeAsync(async (req, res) => {
    const deletedCategory = await category.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: "Category deleted successfully",
      deletedCategory,
    });
  })
);

module.exports = categoryRoute;
