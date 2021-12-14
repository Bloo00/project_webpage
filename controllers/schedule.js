const express = require('express');
const router = express.Router();
const { Schedule } = require('../models');

// ======= gets the dates you have put in the data base.====
router.get('/schedules', (req, res) => {
    Schedule.findAll()
      .then(function(times) {
          // console.log('found all schedule', times);
          res.render('schedules/show', {schedule: times});
      })
      .catch(function(err) {
          console.log('ERROR', err);
          res.render('404',{message: "Cannot Find Any times Scheduled! :c"});
      });
  })


  // send to server.js

  module.exports = router;