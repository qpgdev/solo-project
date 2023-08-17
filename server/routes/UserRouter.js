const express = require('express');
const UserController = require('../controllers/UserController');
const userRouter = express.Router();
// ROUTER FOR REQUESTS ---------------------------------------

// ROUTE POST REQUESTS TO USER DB (Signup attempt)
    // If information does not match information in DB
      // Create user with submitted username and password
    // If username of request matches username in DB
      // Respond that username is taken
userRouter.post('/', UserController.doesExist, UserController.signup, (req, res) => {
  console.log('UserRouter.js: server recieved post request from client');
  return res.sendStatus(201);
});

// ROUTE POST REQUESTS TO SHEET PAGE (Login attempt)
  // MIDDLEWARE
    // If information does not match information in DB
      // Respond that either username or password was invalid
    // If information does match information in DB
      // Redirect to sheet page and populate fields with information of 

module.exports = userRouter;