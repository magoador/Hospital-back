const Speciality = require("../models/Speciality.model");

module.exports.specialityController = {
  addSpeciality: async (req, res) => {
    try {
      const newSpeciality = await Speciality.create({
        speciality: req.body.speciality,
      });
      return res.json(newSpeciality);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllSpecialities: async (req, res) => {
    try {
      const allSpecialities = await Speciality.find();
      return res.json(allSpecialities);
    } catch (err) {
      return res.json(err);
    }
  },
  getSpecialityById: async (Req, res) => {
    try {
      const specialityById = await Speciality.findById(req.params.id);
      return res.json(specialityById);
    } catch (err) {
      return res.json(err);
    }
  },
  patchSpecialityById: async (req, res) => {
    try {
      const patchedSpeciality = await Speciality.findByIdAndUpdate(
        req.params.id,
        {
          speciality: req.body.speciality,
        }
      );
      return res.json(patchedSpeciality);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteSpecialityById: async (req, res) => {
    try {
      const deletedSpeciality = await Speciality.findByIdAndDelete(
        req.params.id
      );
    } catch (err) {
      return res.json(err);
    }
  },
};
