const express = require('express');
const router = express.Router();
const trakdstats = require('../controllers/models')


//Show all activities and link to individual pages
router.get('/api/activities', (req, res) => {
  trakdstats.find({}, (err, foundStats) => {
    res.render('index', {
      act: foundStats
    });
  })
});

//Create a new activity to track
router.post('/api/activities', (req, res) => {
  trakdstats.create({
    activity: req.body.newActTxt
  }).then((partialTrak) => {
    partialTrak.activityArray = [{
      date: new Date(),
      count: req.body.newCount
    }];
    partialTrak.save().then(() => {
      res.redirect('/api/activities');
    });
  });
});

//Show info on a single activity
router.get('/api/activities/:id', (req, res) => {
  trakdstats.findById({
    _id: req.params.id
  }, (err, foundStats) => {
    if (err) return res.render('error', {
        error: "Could not find activity",
        title: "error"
      }),
      console.log(foundStats);

    res.send(foundStats);

  })
});

//Update an activity, changing attributes
router.put('/api/activities/:id', function(req, res) {
  const act = {activity: req.body.putBox};
  trakdstats.update({_id: req.params.id}, act, function(err, change) {
    console.log(change);
    if (err) {
      res.send(err);
    }
    res.send(change);
  });
});
//Delete a single activity
router.delete('/api/activities/:id', (req, res) => {
  trakdstats.remove({ _id: req.params.id }, function(err) {
      if (!err) {
              res.send = 'Activity deleted.';
              res.redirect('/api/activities')
      }
      else {
              res.send = 'error';
              res.redirect('/api/activities');
      }
  });
});

//Add tracked data for the day, should include date and override existing data
router.post('/api/activities/:id/stats', (req, res) => {

});

//Revove tracked data for a day
router.delete('/api/stats/:id', (req, res) => {

});

module.exports = router;
