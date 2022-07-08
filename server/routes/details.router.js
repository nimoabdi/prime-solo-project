// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();
// const axios = require('axios');

// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     console.log('the show id is', id)
//     axios({
//       method: 'GET', 
//       url: `https://api.tvmaze.com/search/shows?/${id}`,
//     }).then((response) => {
//           console.log(response.data)
//           res.send(response.data);
//     }).catch( err => {
//           console.log(err)
//           res.sendStatus(500);
//     });
//  })
//  module.exports = router;