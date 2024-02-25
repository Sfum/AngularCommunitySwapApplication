const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const postRoute = require("./routes/post.routes");
const commentRoute = require("./routes/comment.routes");
const categoryRoute = require("./routes/category.routes");
const userRoute = require("./routes/user.routes");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use("/", postRoute);
app.use("/comment", commentRoute);
app.use("/category", categoryRoute);
app.use("/register", userRoute);
app.use("/login", userRoute);
app.use("/logout", userRoute);

// Static directory path
app.use(
  express.static(path.join(__dirname, "dist/"))
);

const atlasUri = "mongodb+srv://sektor1:UlqvAbWBUHUEN1JZ@sektor2.hvhskib.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(atlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.use((req, res, next) => {
  next(404);
});

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/index.html")
  );
});
