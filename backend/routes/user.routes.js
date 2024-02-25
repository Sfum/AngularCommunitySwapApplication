const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const util = require('util');
const userRoute = express.Router();
const User = require("../model/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Convert the route handler to a promise-based function
const registerUserAsync = util.promisify(async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

userRoute.post('/register', registerUserAsync);

// Add the executeAsync function to handle asynchronous route handlers
const executeAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Use executeAsync to handle asynchronous route handlers
app.use(executeAsync);

module.exports = userRoute;
