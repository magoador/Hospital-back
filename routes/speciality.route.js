const { Router } = require("express");
const {
  specialityController,
} = require("../controllers/speciality.controller");

const router = Router();

router.post("/speciality/add", specialityController.addSpeciality);
router.get("/specialities", specialityController.getAllSpecialities);
router.get("/speciality/:id", specialityController.getSpecialityById);
router.patch(
  "/speciality/update/:id",
  specialityController.patchSpecialityById
);
router.delete(
  "/speciality/delete/:id",
  specialityController.deleteSpecialityById
);

module.exports = router;
