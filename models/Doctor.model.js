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
  records: [{
    date: {
      type: Date
    },
    usluga: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Usluga'
    },
    user: {
     type: mongoose.SchemaTypes.ObjectId,
     ref: 'User'
    }
  }]
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
