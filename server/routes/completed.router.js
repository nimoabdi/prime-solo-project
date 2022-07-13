const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    const sqlQuery = `
    SELECT * FROM series
    WHERE user_id = $1 AND watched = $2 
    ;
    `;
    const sqlValues = [req.params.id, true];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes)=> {
        res.send(dbRes.rows);
    })
    .catch((dbErr)=> {
        console.error('ERROR IN GET BOOKS DB', dbErr);
        res.sendStatus(500);
    })

});


module.exports = router;