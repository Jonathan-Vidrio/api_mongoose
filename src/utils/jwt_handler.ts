import { sign, verify } from "jsonwebtoken";
import { SECRET } from "../config/config";
import IUser from "../api/interfaces/user.interface";
const generateToken = (data: IUser) => {
    const result = sign(data, SECRET, {
        expiresIn: "1h"
    });
    return result;
}

const verifytoken = (data: string) => {
    const result = verify(data, SECRET);
    return result;
}

export {
    generateToken,
    verifytoken
}