//rutas para producto 

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers')

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.deletearProducto);

module.exports = router;