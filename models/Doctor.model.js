const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  surname: String,
  image: String,
  speciality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Speciality",
  },
  experience: Number,
  description: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
