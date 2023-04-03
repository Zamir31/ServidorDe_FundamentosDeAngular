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


exports.obtenerProductos = async (req, res) => {

    try {
        
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

        const { nombreProducto, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ message: "Producto no existe" });
        }

        producto.nombreProducto = nombreProducto;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true});
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.obtenerProducto = async (req, res) => {

    try {

        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no existe" });
        }
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deletearProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no existe" });
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ message: "Producto eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};