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

router.get('/summaryReducer/:id', (req,res)=> {
    const sqlQuery = `

    `
})   

router.post('/', (req,res)=> {
    console.log('in router POST', req.body)
    
    const sqlQuery = `
    INSERT INTO "series"
    ("user_id", "name", "image", "summary")
    VALUES
    ($1, $2, $3, $4)
    `;

    const sqlValues = [
        req.user.id,
        req.body.name,
        req.body.image,
        req.body.summary,
    ];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log(dbRes.rows)
        res.sendStatus(201);
    })
    .catch((err)=> {
        console.error('error in POST DB', err)
        res.sendStatus(500)
    })
});

module.exports = router;