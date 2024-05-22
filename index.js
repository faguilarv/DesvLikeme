import "dotenv/config";

import express from "express";
import postRoute from "./routes/posts.route.js";
const app = express();

//Versión minima node.js 20.11
const __dirname = import.meta.dirname;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//ruta raiz le renderizamos el home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.use("/", postRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//coneccion al puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Conectado exitosamente al puerto ${PORT}`);
});
