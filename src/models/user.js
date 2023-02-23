const { Schema, model } = require("mongoose");

//creamos un esquema de un usuario
const userSchema = new Schema({
    phone: String,
    email: String,
    passwordHash: String,
    contacts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Contact"
        }
    ],
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ],
    dates: [
        {
            type: Schema.Types.ObjectId,
            ref: "Date"
        }
    ]
    // parches: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Parche",
    //     },
    // ],
    // parchesSaved: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Parche",
    //     },
    // ],
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
