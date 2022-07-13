const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    const sqlQuery = `
    SELECT * FROM series
    WHERE watched = $1 AND user_id =$2
    ;
    `;
    const sqlValues = [true, req.user.id];
    console.log('swlvalues', req.user.id)
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