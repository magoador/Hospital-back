const Router = require("express");
const { recordController } = require("../controllers/record.controller");

const router = Router();

router.post("/record/add", recordController.addRecord);
router.get("/records", recordController.getAllRecords);

module.exports = router;
