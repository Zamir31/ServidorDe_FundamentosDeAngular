//rutas para producto 

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers')

router.post('/', productoController.crearProducto);

module.exports = router;