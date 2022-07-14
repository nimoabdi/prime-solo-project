const express = require('express');
const router = express.Router();
const ratingItems = require('../modules/rating.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const ratingId = req.params.id;
    for(const ratingItem of ratingItems) {
        if(ratingItem.id == ratingId) {
            ratingItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(ratingItems);
}); // END GET Route

module.exports = router;