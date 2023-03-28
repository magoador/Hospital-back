const Doctor = require("../models/Doctor.model");

module.exports.doctorController = {
  addDoctor: async (req, res) => {
    try {
      const newDoctor = await Doctor.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        surname: req.body.surname,
        speciality: req.body.speciality,
        experience: req.body.experience,
        description: req.body.description,
      });
      return res.json(newDoctor);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllDoctors: async (req, res) => {
    try {
      const allDoctors = await Doctor.find();
      return res.json(allDoctors);
    } catch (err) {
      return res.json(err);
    }
  },
  getDoctorsBySpeciality: async (req, res) => {
    try {
      const doctorsBySpeciality = await Doctor.find({
        speciality: req.params.speciality,
      });
      return res.json(doctorsBySpeciality);
    } catch (err) {
      return res.json(err);
    }
  },
  patchDoctorById: async (req, res) => {
    try {
      const patchedDoctor = await Doctor.findByIdAndUpdate(
        req.params.id,
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          surname: req.body.surname,
          speciality: req.body.speciality,
          experience: req.body.experience,
          description: req.body.description,
        },
        { new: true }
      );
      return res.json(patchedDoctor);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteDoctorById: async (req, res) => {
    try {
      const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
      return res.json(deletedDoctor);
    } catch (err) {
      return res.json(err);
    }
  },
};
