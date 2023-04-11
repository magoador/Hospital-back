const { Router } = require("express");
const { doctorController } = require("../controllers/doctor.controller");

const router = Router();

router.post("/doctor/add", doctorController.addDoctor);
router.get("/doctors", doctorController.getAllDoctors);
router.get("/doctors/speciality", doctorController.getDoctorsBySpeciality);
router.patch("/doctor/update/:id", doctorController.patchDoctorById);
router.delete("/doctor/delete/:id", doctorController.deleteDoctorById);

module.exports = router;
