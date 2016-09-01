const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 8080;


app.use('/', (req, res) => {
  var dateString = decodeURI(req.url.toString().match(/[a-zA-Z,\%\d\s]+$/gi));
 
  // if it's a row of number conver to milliseconds and int
  if (/^[0-9]+$/.test(dateString)) {
    dateString = parseInt(dateString*1000);
  }

  var obj ={};
  // no param provided
  if (req.url == '/') {
    res.end('Please Enter a date in the appropriate format\n e.g.\n/December%2015,%202015\n/1450137600');
  }
  // param is valid date
  else if (moment(dateString).isValid()) {
    var date = moment(dateString);
    obj = 
    {
      unix: date.unix(),
      natural: date.format('MMMM D, YYYY'),
    };
    res.send(obj);
    res.end();
  }
  // supplied param is invalid date
  else {
    obj = 
    {
      unix: null,
      natural: null,
    };
    
    res.send(obj);
    res.end();
  }

});



app.listen(port);
