const Router = require("express");
const { recordController } = require("../controllers/record.controller");

const router = Router();

router.post("/record/add", recordController.addRecord);
router.get("/records", recordController.getAllRecords);
router.patch("/record/change/:id", recordController.changeRecordStatus);

module.exports = router;
