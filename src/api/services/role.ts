import RoleModel from "../models/role";
import IUser from "../interfaces/user.interface";

const getRole = async (data: IUser, role: string) => {
    console.log(data.roles);
    const roles = await RoleModel.find({
        _id: {
            $in: data.roles
        }
    });
    return roles.some(r => r.name === role);
}

export {
    getRole,

}