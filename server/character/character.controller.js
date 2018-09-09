const express = require('express');
const router = express.Router();
const characterModel = require('./character.model');
const HTTP_STATUS = require('http-status');

router.post('/character', (req, res) => {
    if (!req.body) {
        res.status(HTTP_STATUS.BAD_REQUEST).send('Body not found');
    }
    const model = new characterModel(req.body);
    model.save()
        .then((doc) => {
            res.status(HTTP_STATUS.OK).send(doc)
        })
        .catch((err) => {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
        });
});

router.get('/characters', (req, res) => {
    characterModel.find()
        .then((doc) => {
            res.status(HTTP_STATUS.OK).send(doc);
        })
        .catch((err) => {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
        });
});

router.get('/characters/:id', (req, res) => {
    let { id } = req.params;
    characterModel.findById(id)
        .then((doc) => {
            res.status(HTTP_STATUS.OK).send(doc);
        })
        .catch((err) => {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
        });
});


router.get('/characters/movie/:id', (req, res) => {
    let { id } = req.params;
    getRandomCharacter().then((docs) => {
        let characterInMovie = docs.filter((doc) => {
            if (doc.movieAppearedIn.indexOf(id) > -1) {
                return doc;
            }
        });
        return res.send(characterInMovie);
    });
});

function getRandomCharacter() {
    return characterModel.find({});
}

module.exports = router;
