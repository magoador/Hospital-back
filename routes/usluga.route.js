const { Router } = require("express");
const { UslugaController } = require("../controllers/usluga.controller");


const router = Router();

router.post("/usluga", UslugaController.addUsluga)
router.get('/usluga', UslugaController.getUsluga)
router.get("/usluga/:id", UslugaController.getUslugaId)
router.get("/usluga/category/:id", UslugaController.getUslugaCategoryId)
router.patch("/usluga/:id", UslugaController.changeUsluga)
router.delete("/usluga/:id", UslugaController.delUsluga)


module.exports = router;