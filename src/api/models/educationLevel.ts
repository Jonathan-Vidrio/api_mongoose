import { Schema, Types, Model, model } from "mongoose";
import IEducationLevel from "../interfaces/educationLevel";

const EducationLevelSchema = new Schema<IEducationLevel>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const EducationLevelModel = model("EducationLevel", EducationLevelSchema);

export default EducationLevelModel;