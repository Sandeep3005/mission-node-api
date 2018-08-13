const mongoose = require('mongoose');

const server = 'ds221292.mlab.com:21292';
const database = 'mission_db';
const user = 'mission_user';
const password = 'mission2018';

//mongodb://<dbuser>:<dbpassword>@ds221292.mlab.com:21292/mission_db
const connectUrl = `mongodb://${user}:${password}@${server}/${database}`;

mongoose.connect(
  connectUrl,
  { useNewUrlParser: true},
  (err, client) => {
    if (err) {
      console.log(err);
    }
    console.log('Connect to Mongo-DB');
  }
)

