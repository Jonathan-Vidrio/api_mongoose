import {Document, Schema, Types} from "mongoose";

interface IAuth extends Document {
    email: string,
    password: string,
}

export default IAuth;