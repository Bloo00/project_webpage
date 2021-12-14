const express = require('express');
const router = express.Router();
const { Character } = require('../models');

/**
 * ============================
 * Characters
 * ============================
*/
/**
 * GET ROUTES
 * */ 


router.get('/kanban', function(req,res) {
    res.render('characters/kanban', {});
     // get all Character
    Character.findAll()
    .then(function(characterList) {
        console.log('FOUND ALL characters', characterList);
        // res.json({ characters: characterList });
        res.render('characters/kanban', { characters: characterList })
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.json({ message: 'could not find any characters....'});
    });
});


// /characters route
router.get('/', function(req, res) {
    // get all Character
    Character.findAll()
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

router.get('/new', function(req, res) {
    res.render('characters/new');
});

// GET to Edit page
router.get('/edit/:id', function(req, res) {
    let characterIndex = Number(req.params.id);
    Character.findByPk(characterIndex)
    .then(function(character) {
        if (character) {
            character = character.toJSON();
            res.render('characters/edit', { character });
        } else {
            console.log('This character does not exist');
            // render a 404 page
            res.render('404', { message: 'Characters does not exist' });
        }
    })
    .catch(function(error) {
        console.log('ERROR', error);
    });
    
})


router.get('/:id', function(req, res) {
    console.log('PARAMS', req.params);
    let characterIndex = Number(req.params.id);
    console.log('IS THIS A NUMBER?', characterIndex);
    Character.findByPk(characterIndex)
    .then(function(character) {
        if (character) {
            character = character.toJSON();
            // console.log('IS THIS A character?', character);
            res.render('characters/show', { character });
        } else {
            console.log('This character does not exist');
            // render a 404 page
            res.render('404', { message: 'Character does not exist' });
        }
    })
    .catch(function(error) {
        console.log('ERROR', error);
    });
});

/**
 * POST ROUTES
 * */ 

router.post('/', function(req, res) {
    console.log('SUBMITTED FORM', req.body);
    Character.create({
        title: req.body.title,
        length: Number(req.body.length),
        tracks: Number(req.body.tracks),
        year: Number(req.body.year)
    })
    .then(function(newCharacter) {
        // console.log('NEW Character', newCharacter.toJSON());
        newCharacter = newCharacter.toJSON();
        res.redirect(`/characters/${newCharacter.id}`);
    })
    .catch(function(error) {
        console.log('ERROR', error);
        res.render('404', { message: 'Character was not added please try again...' });
    });
    // res.redirect()
});
/**
 * EDIT
 * */ 
router.put('/:id', function(req, res) {
    console.log('EDIT FORM DATA THAT WAS SUBMITTED', req.body);
    console.log('HERE IS THE ID', req.params.id);
    let characterIndex = Number(req.params.id);
    Character.update({
        title: req.body.title,
        length: Number(req.body.length),
        tracks: Number(req.body.tracks),
        year: Number(req.body.year)
    }, { where: { id: characterIndex } })
    .then(function(response) {
        // console.log('AFTER UPDATE', response);
        res.redirect(`/characters/${characterIndex}`);
    })
    .catch(function(error) {
        // console.log('ERROR', error);
        res.render('404', { message: 'Update was not successful. Please try again.'})
    });
});

/**
 * DELETE
 * */ 
router.delete('/:id', function(req, res) {
    console.log('ID HERE', req.params.id);
    let characterIndex = Number(req.params.id);
    Character.destroy({ where: { id: characterIndex } })
    .then(function(response) {
        console.log('Character DELETED', response);
        res.redirect('/characters');
    })
    .catch(function(error) {
        console.log('ERROR', error);
        res.render('404', { message: 'Character was not deleted, please try again...'});
    })
});

module.exports = router;