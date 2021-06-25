const express = require('express');
const router = express.Router();
const getProducts = require('../services/serviceSql');

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
