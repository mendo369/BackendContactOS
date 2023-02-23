const { Schema, model } = require("mongoose");

//creamos un esquema de una nota
const noteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    content: String
});

//vamos a modificar el objeto toJson que nos devuelve mongo
noteSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        (returnedObject.id = returnedObject._id),
            delete returnedObject._id,
            delete returnedObject.__v;
    },
});

//este va a ser el onjeto del que se instansiaran las demás notas
const Note = model("Note", noteSchema);

module.exports = Note;
