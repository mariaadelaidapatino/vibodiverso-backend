const express= require("express");
const router = express.Router();
const avistamientosController= require("../controllers/avistamientos.controller");


router.post("/", avistamientosController.create);
router.get("/", avistamientosController.find);
router.get("/:id", avistamientosController.findOne);
router.put("/:id", avistamientosController.update);
router.delete("/:id", avistamientosController.remove);

module.exports=router
