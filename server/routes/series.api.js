const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

// displaying series 

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log('series id', id)

    axios({
        method: 'GET',
        url: `https://api.tvmaze.com/shows/1?embed=cast`,
        params: {
            api_key: process.env.SERIES_API, 
        }
    }).then((response) => {
        console.log(response.data)
        res.send(response.data);
  }).catch(err => {
        console.log(err)
        res.sendStatus(500);
  });
})

module.exports = router;