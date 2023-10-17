import IUser from "../interfaces/user.interface";
import UserModel from "../models/user";

const getUsers = async () => {
    const result = await UserModel.find({});
    return result;
}

const getUser = async (_id: string) => {
    const result = await UserModel.findById({ _id: _id });
    return result;
}

const registerUser = async (data: IUser) => {
    const result = await UserModel.create(data);
    return result;
}

const updateUser = async (_id: string, data: IUser) => {
    const result = await UserModel.findByIdAndUpdate(
        { _id: _id },
        data,
        { new: true }
    );
    return result;
}

const deleteUser = async (_id: string) => {
    const result = await UserModel.findByIdAndRemove({ _id: _id });
    return result;
}

export {
    getUsers,
    getUser,
    registerUser,
    updateUser,
    deleteUser
}