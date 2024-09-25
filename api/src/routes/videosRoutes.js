const express = require("express");
const router = express.Router();
const videoscontroller = require("../controller/videoscontroller");

// Rota para listar todos os vídeos
router.get("/", videoscontroller.index);

// Rota para buscar um vídeo pelo ID
router.get("/:id", videoscontroller.show);

// Rota para criar um novo vídeo
router.post("/", videoscontroller.store);

// Rota para editar um vídeo pelo ID
router.put("/:id", videoscontroller.update);

// Rota para deletar um vídeo pelo ID
router.delete("/:id", videoscontroller.delete);

module.exports = router;
