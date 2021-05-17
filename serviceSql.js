const sql = require('mssql');

let config = {
  user: 'sams_node', //default is sa
  password: 'sa',
  server: 'localhost', // for local machine
  database: 'TestData', // name of database
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
};

sql.on('error', (err) => {
  // ... error handler
  console.log('Sql database connection error ', err);
});

async function getEtiquetas() {
  return await sql
    .connect(config)
    .then((pool) => {
      // return pool.request().query('select * from Products');
      return (
        pool
          .request()
          .input(`VarPrice`, sql.Int, 10)
          // .output('output_parameter', sql.VarChar(50))
          .execute('pr_Names')
      );
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = getEtiquetas;
