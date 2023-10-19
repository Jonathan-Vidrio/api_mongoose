import { Request, Response } from "express";
import { handlerHttp } from "../../utils/error_handler";
import * as services from "../services/tutor";

const getAllTutors = async (req: Request, res: Response) => {
    try {
        const result = await services.getTutors();
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_GET_ALL_TUTORS");
    }
}

const getTutorById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.getTutor(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_GET_TUTOR_BY_ID");
    }
}

const postTutor = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await services.registerTutor(body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_POST_TUTOR");
    }
}

const putTutor = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const { body } = req;
        const result = await services.updateTutor(_id, body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_PUT_TUTOR");
    }
}

const deleteTutor = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.deleteTutor(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_DELETE_TUTOR");
    }
}

export {
    getAllTutors,
    getTutorById,
    postTutor,
    putTutor,
    deleteTutor,
}