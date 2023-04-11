const mongoose = require("mongoose");

const userSchemsa = mongoose.Schema({
  firstname: String,
  lastname: String,
  surname: String,
  oms: Number,
  login: String,
  password: String,
  phone: String,
  role: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("User", userSchemsa);

module.exports = User;
