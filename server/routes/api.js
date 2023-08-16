const express = require('express');
const router = express.Router();

// ROUTER FOR REQUESTS ---------------------------------------

// ROUTE POST REQUESTS TO SHEET PAGE (Login attempt)
  // MIDDLEWARE
    // If information does not match information in DB
      // Respond that either username or password was invalid
    // If information does match information in DB
      // Redirect to sheet page and populate fields with information of 
  app.post('/', (req, res) => {
    console.log('server recieved post request');
  });


// ROUTE POST REQUESTS TO USER DB (Signup attempt)
    // If information does not match information in DB
      // Create user with submitted username and password
    // If username of request matches username in DB
      // Respond that username is taken

module.exports = router;