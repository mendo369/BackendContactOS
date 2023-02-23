const express = require("express")

const { ContactsControllers } = require("./controllers")

const router = express.Router()

module.exports.ContactsAPI = (app) => {
    router
        .get("/", ContactsControllers.GetAllContacts)
    // .get("/:id", ContactsControllers.GetContact)
    // .post("/", ContactsControllers.AddContact)
    // .put("/:id", ContactsControllers.UpdateContact)
    // .delete("/:id", ContactsControllers.DeleteContact);

    app.use("/api/contacts", router)
}
