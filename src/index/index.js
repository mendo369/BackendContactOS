const express = require("express");

module.exports.IndexApi = (app) => {
    const router = express.Router();
    router.get("/", (req, res) => {
        const menu = {
            users: `http://${req.headers.host}/api/users`, //saca el host donde está nuestro proyecto
            auth: `http://${req.headers.host}/api/auth`,
        };
        res.status(200).json(menu);
    });
    app.use("/", router);
};

module.exports.NotFoundApi = (app) => {
    const router = express.Router();
    router.all("*", (req, res) => {
        // Response.error(res, new createError.NotFound());
        res.status(404).json({ error: "Not found" });
    }); //all recibe cualquier verbo en la url
    app.use("/", router);
};
