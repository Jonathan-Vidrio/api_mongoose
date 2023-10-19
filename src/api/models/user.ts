import { Schema, model } from "mongoose";
import IUser from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: [{
            ref: "Role",
            type: Schema.Types.ObjectId,
        }],
        isOK: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("Users", UserSchema);

export default UserModel;