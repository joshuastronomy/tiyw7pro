const express = require('express');
const router = express.Router();

//Show all activities and link to individual pages
router.get('/api/activities', (req, res) => {

});

//Create a new activity to track
router.post('/api/activities', (req, res) => {

});

//Show info on a single activity
router.get('/api/activities/:id', (req, res) => {

});

//Update an activity, changing attributes
router.put('/api/activities/:id', (req, res) => {

});

//Delete a single activity
router.delete('/api/activities/:id', (req, res) =>  {

});

//Add tracked data for the day, should include date and override existing data
router.post('/api/activities/:id/stats', (req, res) => {

});

//Revove tracked data for a day
router.delete('/api/stats/:id', (req, res) => {

});

// module.exports = router;
