import IAuth from "./auth.interface";
import {Types} from "mongoose";

interface IUser extends IAuth {
    roles?: Types.ObjectId[],
    isOK?: boolean,
}

export default IUser;