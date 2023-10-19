import { model, Schema } from "mongoose";
import ITutor from "../interfaces/tutor.interface";

const TutorSchema = new Schema<ITutor>(
    {
        workerId: {
            type: String,
            required: true,
            unique: true,
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
        status: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const TutorModel = model("Tutor", TutorSchema);

export default TutorModel;