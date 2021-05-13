const express = require('express');
const app = express();
const ejs = require('ejs');

// app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve your css as static
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  // res.render(__dirname + '/index.html')
  res.render('pages/index');
});

app.post('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  ejs.render('/index.html');
});

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});
