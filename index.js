'use strict';

const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is an example of container bakery ingestion process');
});
