const helmet = require('helmet');
// const path = require('path');
const etiquetas = require('./routes/etiquetas');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/', etiquetas);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
