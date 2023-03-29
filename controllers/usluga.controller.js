const Usluga = require("../models/Usluga.model");

module.exports.UslugaController = {
  addUsluga: async (req, res) => {
    try {
      const usluga = await Usluga.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        doctor: req.body.doctor,
        category: req.body.category
      });
      res.json(usluga);
    } catch (error) {
      res.json(error.message);
    }
  },

  changeUsluga: async (req, res) => {
    try {
      const usluga = await Usluga.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
      });
      res.json(usluga);
    } catch (error) {
      res.json(error.message);
    }
  },

  delUsluga: async (req, res) => {
    try {
      const usluga = await Usluga.findByIdAndDelete(req.params.id);
      res.json(usluga);
    } catch (error) {
      res.json(error.message);
    }
  },
  getUsluga: async (req, res) => {
    try {
      const usluga = await Usluga.find().populate('doctor category')
      res.json(usluga)
    } catch (error) {
      res.json(error.message)
    }
},

getUslugaId: async (req, res) => {
    try {
      const usluga = await Usluga.findById(req.params.id).populate('doctor category')
      res.json(usluga);
    } catch (error) {
        res.json(error.message)
    }
  },

  getUslugaCategoryId: async (req, res) => {
    try {
      const usluga = await Usluga.findById({category: req.params.id}).populate('doctor category')
      res.json(usluga);
    } catch (error) {
        res.json(error.message)
    }
    
  },
}