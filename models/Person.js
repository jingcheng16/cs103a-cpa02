"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var personSchema = Schema({
  firstName: String,
  lastName: String,
  gender: String,
  age: Number,
});

module.exports = mongoose.model("Person", personSchema);
