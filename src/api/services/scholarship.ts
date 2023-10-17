import IScholarship from "../interfaces/scholarship.interface";
import ScholarshipModel from "../models/scholarship";

const getScholarships = async () => {
    const result = await ScholarshipModel.find({});
    return result;
}

const getScholarship = async (_id: string) => {
    const result = await ScholarshipModel.findById({ _id: _id });
    return result;
}

const registerScholarship = async (data: IScholarship) => {
    const result = await ScholarshipModel.create(data);
    return result;
}

const updateScholarship = async (_id: string, data: IScholarship) => {
    const result = await ScholarshipModel.findByIdAndUpdate(
        { _id: _id },
        data,
        { new: true }
    );
    return result;
}

const deleteScholarship = async (_id: string) => {
    const result = await ScholarshipModel.findByIdAndRemove({ _id: _id });
    return result;
}

export {
    getScholarships,
    getScholarship,
    registerScholarship,
    updateScholarship,
    deleteScholarship,
}