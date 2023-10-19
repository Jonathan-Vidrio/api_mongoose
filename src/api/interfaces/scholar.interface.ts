import {Types} from "mongoose";

interface IScholar {
    userId: Types.ObjectId;
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    curp: string;
    birthdate: Date;
    scholarShipId: Types.ObjectId[];
    educationLevelId: Types.ObjectId;
    grade: Number;
    tutorId: Types.ObjectId;
}

export default IScholar;