const path = require('path');
const getEtiquetas = require('./serviceSql');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', async (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  const etiquetas = await getEtiquetas();

  
  etiquetas.map((et) => {
    return (et.PUNIT = et.PUNIT.toFixed(2));
  });

  etiquetas.forEach((element) => {
    console.log(element.PUNIT);
  });
  
  res.render('etOferton', { etiquetas });
});

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});
