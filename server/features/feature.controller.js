const express = require('express');
const router = express.Router();
const characterModel = require('../character/character.model');
const uniqueRandom = require('unique-random');
const HTTP_STATUS = require('http-status');

let rand;

router.get('/random_team', (req, res) => {
  let team = [];
  let TEAM_SIZE = 5;
  getRandomCharacter().then((docs) => {
    const totalCharatersLength = docs.length;
    rand = uniqueRandom(1, totalCharatersLength - 1);
    const ETHAN = docs.filter((doc) => doc.firstName == 'Ethan' && doc.lastName == 'Hunt');
    team.push(ETHAN);
    
    for (let i = 0; i < (TEAM_SIZE - 1); i++) {
      const newCharacter = docs[rand()];
      const isCharExist = team.some((char) => char._id == newCharacter._id);
      if (!isCharExist) {
        team.push(newCharacter);
      } else {
        i--;
      }
    }
    res.send(team);
  });
});

function getRandomCharacter() {
  return characterModel.find({});
}


module.exports = router;