const express = require('express');
const router = express.Router();
const { Schedule } = require('../models');



// ================= shows the dates you have booked  ====
// main
router.get('/', function(req, res) {
    // get all Character
    Schedule.findOne()
    .then(function(ScheduleInfo) {
        console.log('FOUND ALL ScheduleInfo', ScheduleInfo);
        // res.json({ characters: characterList });
        res.render('Schedules/index', { Schedule: ScheduleInfo })
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.json({ message: 'could not find your Schedule....'});
    });
});

// to make new schedule

router.get('/new', function(req, res) {
    res.render('schedules/new');
});


// GET to Edit page
// needs to change
router.get('/edit/:id', function(req, res) {
    let characterIndex = Number(req.params.id);
    Character.findByPk(characterIndex)
    .then(function(character) { 
        if (character) {
            character = character.toJSON();
            res.render('schedules/edit', { character });
        } else {
            console.log('This schedule does not exist');
            // render a 404 page
            res.render('404', { message: 'Schedule does not exist' });
        }
    })
    .catch(function(error) {
        console.log('ERROR', error);
    });
    
})

// shows the show

router.get('/:id', function(req, res) {
    console.log('PARAMS', req.params);
    let scheduleIndex = Number(req.params.id);
    // console.log('IS THIS A NUMBER?', scheduleIndex);
    Schedule.findByPk(schedule)
    .then(function(schedule) {
        if (schedule) {
            schedule = schedule.toJSON();
            // console.log('IS THIS A schedule?', schedule);
            res.render('schedules/show', { schedule });
        } else {
            console.log('This schedule does not exist');
            // render a 404 page
            res.render('404', { message: 'schedule does not exist' });
        }
    })
    .catch(function(error) {
        console.log('ERROR', error);
    });
});
  // send to server.js

  module.exports = router;