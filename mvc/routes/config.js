const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioControllers")

const router = Router()

router.get("/user/index", UsuarioController.index)

module.exports = router