const express = require("express");

const { config } = require("./src/config/config");
const { dbConnect } = require("./src/database/mongo");

const { AuthAPI } = require("./src/auth/index");
const { UsersAPI } = require("./src/users/index");
const { IndexApi, NotFoundApi } = require("./src/index/index");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json()); //le damos la capacidad al servidor de recibir parametros en el request

IndexApi(app);
// AuthAPI(app);
// UsersAPI(app);
NotFoundApi(app);

app.listen(config.port, () => {
    console.log("Bienvenido señor stark", config.port);
});

dbConnect();
