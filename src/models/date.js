const { Schema, model } = require("mongoose");

//creamos un esquema de una nota
const dateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: String,
    info: String
});

//vamos a modificar el objeto toJson que nos devuelve mongo
dateSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        (returnedObject.id = returnedObject._id),
            delete returnedObject._id,
            delete returnedObject.__v;
    },
});

//este va a ser el onjeto del que se instansiaran las demás notas
const Date = model("Date", dateSchema);

module.exports = Date;
