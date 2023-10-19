import {Types} from "mongoose";

interface IScholarship {
    description: string,
    amount: number,
    educationLevel?: Types.ObjectId[],
    startDate: Date,
    endDate: Date,
    status: boolean
}

export default IScholarship;