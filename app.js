const express = require('express');
const hbs     = require('hbs');
const port    = process.env.PORT || 3000;

var app = express();

app.set('view-engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req,res) => {
  res.render('home.hbs', {
    welcomeMessage: 'Welcome!',
    pageTitle: 'Home Page'
  });
});

app.get("/about", (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About',
    aboutMessage: 'This site serves as a placeholder for testing git, github and heroku'
  });
})

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
