const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const { login, phone, password, firstname, lastname, surname, oms } =
        req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({
        login,
        phone,
        password: hash,
        firstname,
        lastname,
        surname,
        oms,
      });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  autorizationUser: async (req, res) => {
    try {
      const { login, phone, password } = req.body;

      const condidate = await User.findOne({ login });

      if (!condidate) {
        return res.status(401).json({ error: "Неправильное имя ползователя" });
      }

      const numberPhone = await User.findOne({ phone });

      if (!numberPhone) {
        return res.status(401).json({ error: "Неправильный номер телефона" });
      }

      const valid = await bcrypt.compare(password, condidate.password);

      if (!valid) {
        return res.status(401).json({ error: "неправильный пароль" });
      }

      const payload = {
        id: condidate._id,
        login: condidate.login,
        phone: numberPhone.phone,
        password: password,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "24h",
      });

      res.json(token);
    } catch (error) {
      res.json(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { login, phone, password, firstname, lastname, surname, oms } =
        req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          login,
          phone,
          password: hash,
          firstname,
          lastname,
          surname,
          oms,
        },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  getUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  getUserId: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
};
