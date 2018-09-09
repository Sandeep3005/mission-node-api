const app = require('./app');
const dbConnect = require('./database');
const bodyParser = require('body-parser');

const movieController = require('./movies/movie.controller');
const characterController = require('./character/character.controller');
const featureController = require('./features/feature.controller');

const PORT = process.env.PORT || 3000;

//Middle Ware For body parsing

app.use(bodyParser.json());
app.use(movieController);
app.use(characterController);
app.use(featureController);

app.use((req, res, next) => {
  console.log(`${new Date().toString()} - ${req.originalUrl} - ${req.body}`);
  next();
});

app.use((req, res, next) => {
  res.status(404).send('You are lost brother/sister');
});



app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
