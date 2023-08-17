const mongoose = require('mongoose');
const AuthModelExports = require('../models/AuthModels');
const User = AuthModelExports.User;

const UserController = {};

UserController.doesExist = async function (req, res, next) {
  try {
    console.log('Confirming user does not exist in DB');
    const usersWithUsername = await User.find({username: req.body.username});
      if (usersWithUsername.length === 0) {
        // This does not inform the client: just the server
        console.log('User does not exist in DB');
        res.locals.userExists = false;
        return next();
      } else {
        console.log('Username already exists');
        res.locals.userExists = true;
        return next();
    }
  } catch (error) {
    console.log('UserController.doesExist: Error querying DB', error)
    return next(error);
  }
}

UserController.signup = async function (req, res, next) {
  try {
    console.log('UserContoller.js: req.body in UserController.signup', req.body);
    if (res.locals.userExists === false) {
      const signupAttempt = await User.create({ 
        username: req.body.username,
        password: req.body.password
      });
      console.log('Creating user');
      return next();
    } else {
      console.log('Will not create user');
      return next();
    }
  } catch (error) {
    console.log('error in UserController.signup', error);
    return next(error);
  }
}

UserController.login = async function (req, res, next) {
  try {
    console.log('UserContoller.js: req.body in UserController.login', req.body);
    console.log('Attempting to log in');
    const loginCredentials = await User.find({username: req.body.username, password: req.body.password});
    if (loginCredentials.length !== 0) {
      console.log('Logging in');
      return next();
    } else {
      console.log('Failed to log in - username does not exist or password is invalid');
      return next();
    }
  } catch (error) {
    console.log('error in UserController.login', error);
    return next(error);
  }
}

// Is this username already in the database?
  // If not, add this username and this password as a new user
  // 
// Else
  // Send back a response / error saying that username is already taken

module.exports = UserController;