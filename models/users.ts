import Mongoose, { Schema } from "mongoose";
import { CIDEINUSers } from "../types";

const UsersSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    creationDate: { type: Date, required: true }
})

export default Mongoose.model<CIDEINUSers>("Users", UsersSchema);