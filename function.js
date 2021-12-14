


const { Character } = require( './models');

Character.create({
    scheduleID: 2,
    name: "Throw me",
    height: 2,
    weight: 2,
    strength: 14,
    dexterity: 10,
    constitution: 15,
    wisdom: 4,
    intelligence: 4,
    charisma: 4,
    race: "halfling",
    class: "palidin"
})
.then(function( newCharacter ){
    console.log( newCharacter.toJSON());
})
.catch(function (err){
    console.log("err ", err)
})