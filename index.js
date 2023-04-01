const express = require("express");
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

//conectamos a la base de datos
conectarDB();

app.use(express.json());

app.use('/api/producto', require('./routes/producto'));

//defininmos la ruta principal
// app.get("/", (req, res) => {
//     res.send("Hola mundo");
// })

app.listen(3000, () => console.log("Listening on port"))