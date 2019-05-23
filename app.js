const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('we are now home in!!!')
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    dbName: "testboy" }, 
  () => 
  console.log('connected to DB!'))

// How do we start Listening to the server
app.listen(3000);