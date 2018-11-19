const express = require('express');
// const hbs = require('hbs');
const pug = require('pug');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

// sass
var sass = require('node-sass');
sass.render({
  file: 'index.sass'
}, function(err, result){});


// hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','pug');
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/src/'));


// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear()
// });
//
// hbs.registerHelper('screamIt', (text) => {
//   return new text.toUpperCase();
// });

// var currentYear = new Date().getFullYear();

app.get('/', (req, res) => {
  res.render('index.pug', {
    pageTitle:'index'
  });
});


// app.listen(3000, () => {
//   console.log('Server is up on port 3000')
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
