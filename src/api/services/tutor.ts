import ITutor from "../interfaces/tutor.interface";
import TutorModel from "../models/tutor";

const getTutors = async () => {
    const result = await TutorModel.find({});
    return result;
}

const getTutor = async (_id: string) => {
    const result = await TutorModel.findById({ _id: _id });
    return result;
}

const registerTutor = async (data: ITutor) => {
    const result = await TutorModel.create(data);
    return result;
}

const updateTutor = async (_id: string, data: ITutor) => {
    const result = await TutorModel.findByIdAndUpdate(
        { _id: _id },
        data,
        { new: true }
    );
    return result;
}

const deleteTutor = async (_id: string) => {
    const result = await TutorModel.findByIdAndRemove({ _id: _id});
    return result;
}

export {
    getTutors,
    getTutor,
    registerTutor,
    updateTutor,
    deleteTutor,
}