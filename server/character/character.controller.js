const express = require('express');
const router = express.Router();
const characterModel = require('./character.model');
const HTTP_STATUS = require('http-status');

router.post('/character', (req, res) => {
    console.log(req.body);
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

module.exports = router;
