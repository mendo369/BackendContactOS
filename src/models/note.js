const { Schema, model } = require("mongoose");

//creamos un esquema de una nota
const noteSchema = new Schema({

    userName: String,
    name: String,
    email: String,
    passwordHash: String,
    avatar: String,
    parches: [
        {
            type: Schema.Types.ObjectId,
            ref: "Parche",
        },
    ],
    parchesSaved: [
        {
            type: Schema.Types.ObjectId,
            ref: "Parche",
        },
    ],
});

//vamos a modificar el objeto toJson que nos devuelve mongo
userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        (returnedObject.id = returnedObject._id),
            delete returnedObject._id,
            delete returnedObject.__v;
        delete returnedObject.passwordHash;
    },
});

//este va a ser el onjeto del que se instansiaran las demás notas
const User = model("User", userSchema);

module.exports = User;
