const path = require('path');
const getEtiquetas = require('./serviceSql');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// serve your css as static

// app.get('/', async function (req, res) {
// const etiquetas = await getEtiquetas();

// res.render('index', { etiquetas });
// res.render('layout');
// console.log('etiquetas:', etiquetas.recordset);
// });

app.get('/', async (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  const etiquetas = await getEtiquetas();

  
  etiquetas.map((et) => {
    return (et.PUNIT = et.PUNIT.toFixed(2));
  });

  etiquetas.forEach((element) => {
    console.log(element.PUNIT);
  });
  
  res.render('index', { etiquetas });
});

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});
