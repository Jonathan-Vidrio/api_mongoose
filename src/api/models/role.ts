import { Schema, Types, Model, model } from 'mongoose';
import IRole from "../interfaces/role.interface";

const RoleSchema = new Schema<IRole>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: String,
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const RoleModel = model('Role', RoleSchema);

export default RoleModel;