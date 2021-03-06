const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    const sqlQuery = `
    SELECT * FROM series 
    WHERE user_id= $1 AND watched =$2
    ORDER BY "name" ASC;
    `;

  const sqlValues = [req.user.id, false];
    pool
    .query(sqlQuery, sqlValues)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });
  

router.post('/', (req,res)=> {
    console.log('in router POST', req.body)
    
    const sqlQuery = `
    INSERT INTO "series"
    ("user_id", "name", "image", "watched", "summary")
    VALUES
    ($1, $2, $3, $4, $5);
    `;

    const sqlValues = [
        req.user.id,
        req.body.name,
        req.body.image,
        false,
        req.body.summary
        
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

router.delete('/:id', (req, res)=> {
  console.log('books deleted id ', req.params.id);
  const sqlQuery = `
  DELETE FROM "series"
  WHERE "id" =$1;
  `;
  const sqlValues = [req.params.id];
  pool
  .query(sqlQuery, sqlValues)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
     console.error('error in delete', err)
      res.sendStatus(500)
    })
});

router.put('/:id', (req, res)=> {
  console.log('put console ', req.params.id);
  
  const sqlQuery = `
  UPDATE  "series" 
  SET watched = $1
  WHERE id =$2;
  `;
  const sqlParams = [true, req.params.id];
  pool
  .query(sqlQuery, sqlParams)
    .then(()=> {
      res.send(204);
    })
    .catch(err => {
     console.error('error in PUTT', err)
      res.sendStatus(500)
    })
})
module.exports = router;