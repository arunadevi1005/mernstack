import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,     //required: true is used to make the field mandatory, if not provided it will take false as default
    email: String,
    password: String,
    id: String,
});

export default mongoose.model("User", userSchema); //exporting the model with name User and schema userSchema
