const express = require('express');

const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(new Date().toDateString());
});


app.listen(port);
