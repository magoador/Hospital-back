const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  date: {
    type: Date,
  },
  usluga: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Usluga",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  doctor: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Doctor",
  },
  status: {
    type: String,
    default: 'В очереди'
  }
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
