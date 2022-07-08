const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    const query = `SELECT * FROM series ORDER BY "show" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });

router.get('/', (req,res)=> {
    const sqlQuery = `
        
    `
})   

module.exports = router;
