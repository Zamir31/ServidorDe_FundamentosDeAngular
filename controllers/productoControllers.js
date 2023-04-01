const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {

    try {

        let producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};