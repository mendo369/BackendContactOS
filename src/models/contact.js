const { Schema, model } = require("mongoose");

//creamos un esquema de una nota
const contactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    phone: String,
    address: String
});

//vamos a modificar el objeto toJson que nos devuelve mongo
contactSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        (returnedObject.id = returnedObject._id),
            delete returnedObject._id,
            delete returnedObject.__v;
    },
});

//este va a ser el onjeto del que se instansiaran las demás notas
const Contact = model("Contact", contactSchema);

module.exports = Contact;
