const mongoose = require("mongoose");

const specialitySchema = mongoose.Schema({
  speciality: String,
});

const Speciality = mongoose.model("Speciality", specialitySchema);

module.exports = Speciality;
