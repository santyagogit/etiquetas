const path = require('path');
const getEtiquetas = require('./serviceSql');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve your css as static
app.use(express.static(__dirname + '/public'));

app.get('/', async function (req, res) {
  res.render('index');
  const etiquetas = await getEtiquetas();
  console.log('etiquetas:', etiquetas.recordset);
});

app.post('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.render('index');
});

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});
