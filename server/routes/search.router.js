const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req, res)=> {
    const search = req.params.search
    console.log('searching for', search)

    axios({
        method: 'GET',
        url: ` https://api.tvmaze.com/search/shows?`,
        params:{
            api_key: process.env.SERIES_API,
            q: search,
            limit: 10
        } 
    }).then((response) => {
        console.log(response.data)
        res.send(response.data)
  }).catch(err => {
        console.log(err)
        res.sendStatus(500);
  });
})

module.exports = router;