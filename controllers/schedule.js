const express = require('express');
const router = express.Router();
const { Schedule } = require('../models');

// ================= shows the dates you have booked  ====
router.get('/', function(req, res) {
    // get all Character
    Schedule.findAll()
    .then(function(characterList) {
        console.log('FOUND ALL characters', characterList);
        // res.json({ characters: characterList });
        res.render('characters/index', { characters: characterList })
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.json({ message: 'could not find any characters....'});
    });
});

  // send to server.js

  module.exports = router;