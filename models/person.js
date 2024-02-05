const mongoose = require("mongoose");

//Define the  Person schema

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
});

// Create Person model

const Person = mongoose.model("person", personSchema);
module.exports = Person;
