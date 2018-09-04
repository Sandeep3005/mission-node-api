const movieModel = require('./movie.model');
const express = require('express');
const HTTP_STATUS = require('http-status');

const router = express.Router();

/**** POST REQUESTS ******/
router.post('/movies', (req, res) => {
  if(!req.body) {
    res.status(HTTP_STATUS.BAD_REQUEST).send('Body not found');
  }
  let model = new movieModel(req.body);
  model.save()
    .then((doc) => {
      res.status(HTTP_STATUS.OK).send(doc);
    })
    .catch((err) => {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
    });
});

/**** PUT REQUESTS ******/
router.put('/movies/edit/:id', (req, res) => {
  let { id } = req.params;
  if (!id) {
    res.status(HTTP_STATUS.BAD_REQUEST).send('Movie id not found');
  }
  movieModel.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true } 
  )
    .then((doc) => {
      res.status(HTTP_STATUS.OK).send(doc);
    })
    .catch((err) => {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
    });
});

/**** GET REQUESTS ******/
router.get('/movies', (req, res) => {
  movieModel.find()
    .then((doc) => {
      res.status(HTTP_STATUS.OK).send(doc);
    })
    .catch((err) => {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err);
    });
});

router.get('/movies/:id', (req, res) => {
  let { id } = req.params;
  movieModel.findById(id)
    .then((doc) => {
      res.status(HTTP_STATUS.OK).send(doc);
    })
    .catch((err) => {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err)
    });
});

router.get('/movies/position/:seriesPosition', (req, res) => {
  let { seriesPosition } = req.params;
  console.log('seriesPosition', seriesPosition)
  movieModel.findOne({ seriesPosition })
    .then((doc) => {
      res.status(HTTP_STATUS.OK).send(doc);
    })
    .catch((err) => {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(err)
    });
});


module.exports = router;