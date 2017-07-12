const express = require('express');
const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  activity: {type: String, required: true},
  activityArray: [{
      date: Date,
      count: Number
    }]
});

statSchema.pre('save', function(next)  {

  if (!this.created_at) this.created_at = new Date();
  next();
});

const trakdstats = mongoose.model('trakdstats', statSchema);

module.exports = trakdstats;
