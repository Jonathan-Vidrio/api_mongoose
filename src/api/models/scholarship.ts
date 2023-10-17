import { Schema, Types, Model, model } from "mongoose";
import IScholarship from "../interfaces/scholarship.interface";

const ScholarshipSchema = new Schema<IScholarship>(
    {
        description: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        educationLevel: [{
            ref: "EducationLevel",
            type: Schema.Types.ObjectId
        }],
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ScholarshipModel = model("Scholarship", ScholarshipSchema);

export default ScholarshipModel;