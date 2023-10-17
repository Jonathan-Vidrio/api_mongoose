import IUser from "../interfaces/user.interface";
import UserModel from "../models/user";
import RoleModel from "../models/role";
import IAuth from "../interfaces/auth.interface";
import { encrypt, verify } from "../../utils/bcrypt_handler";
import {response} from "express";
import {generateToken} from "../../utils/jwt_handler";

const registerUser = async (data: IUser) => {
    const { email, password, roles } = data;
    const checkIs = await UserModel.findOne({ email: email });
    if (checkIs) return "EMAIL_IS_EXIST";

    const user: IUser = new UserModel({
        email: email,
        password: await encrypt(password),
    });

    if (roles) {
        const rolesFound = await RoleModel.find({ name: { $in: roles } });
        user.roles = rolesFound.map(role => role._id);
    } else {
        const rolesExist = await RoleModel.findOne({name: "user"});
        if(rolesExist) user.roles = [rolesExist._id];
    }

    const result = await UserModel.create(user);
    return result;
}

const loginUser = async (data: IAuth) => {
    const { email, password } = data;
    const isData = await UserModel.findOne({ email: email });
    if (!isData) return "USER_NOT_FOUND";

    const checkPassword =  await verify(password, isData.password);
    if (!checkPassword) return "PASSWORD_NOT_MATCH";

    const token = generateToken(isData.toObject());

    return token;
}

export {
    registerUser,
    loginUser,
}