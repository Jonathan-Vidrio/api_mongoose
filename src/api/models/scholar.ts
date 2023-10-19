import IScholar from "../interfaces/scholar.interface";
import { model, Schema } from "mongoose";

const ScholarSchema = new Schema<IScholar>(
    {
        userId: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },
        name: {
            type: String,
            required: true,
        },
        paternalSurname: {
            type: String,
            required: true,
        },
        maternalSurname: {
            type: String,
            required: true,
        },
        curp: {
            type: String,
            required: true,
            unique: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        scholarShipId: [
            {
                ref: "ScholarShip",
                type: Schema.Types.ObjectId,
            }
        ],
        educationLevelId: {
            ref: "EducationLevel",
            type: Schema.Types.ObjectId,
        },
        grade: {
            type: Number,
            required: true,
        },
        tutorId: {
            ref: "Tutor",
            type: Schema.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ScholarModel = model("Scholar", ScholarSchema);

export default ScholarModel;