const express = require('express');
const router = express.Router();
const getProducts = require('./services/serviceSql');

router.get('/', async (req, res) => {
  // app.set('views', path.join(__dirname, 'views'));
  // console.log(__dirname + '../pages/home.html');
  // res.sendFile('home.html', { root: path.join(__dirname, '../pages/') });
  // const products = await processProducts();
  res.render('home');
});

router.get('/oferton', async (req, res) => {
  const products = await processProducts();
  res.render('etOferton', { products });
});

router.get('/oferta', async (req, res) => {
  const products = await processProducts();
  res.render('etOferta', { products });
});

async function processProducts() {
  const products = await getProducts();

  products.map((et) => {
    return (et.PUNIT = et.PUNIT.toFixed(2));
  });

  // products.forEach((element) => {
  //   console.log(element.PUNIT);
  // });
  return products;
}

module.exports = router;
