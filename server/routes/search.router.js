const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res)=> {
    const {searchId} = req.params
    console.log('searching for', searchId)

    axios({
        method: 'GET',
        url: ` https://api.tvmaze.com/search/shows?q=:querys`,
        params: process.env.SERIES_API,
    }).then((response) => {
        console.log(response.data)
        res.send(response.data);
  }).catch(err => {
        console.log(err)
        res.sendStatus(500);
  });
})

module.exports = router;