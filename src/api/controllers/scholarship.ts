import { Request, Response } from 'express';
import { handlerHttp } from '../../utils/error_handler';
import * as services from '../services/scholarship';

const getAllScholarships = async (req: Request, res: Response) => {
    try {
        const result = await services.getScholarships();
        res.send(result);
    } catch (e) {
        handlerHttp(res, 'ERROR_GET_ALL_SCHOLARSHIPS');
    }
}

const getScholarshipById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.getScholarship(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, 'ERROR_GET_SCHOLARSHIP_BY_ID');
    }
}

const postScholarship = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await services.registerScholarship(body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, 'ERROR_POST_SCHOLARSHIP', e);
    }
}

const putScholarship = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const { body } = req;
        const result = await services.updateScholarship(_id, body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, 'ERROR_PUT_SCHOLARSHIP');
    }
}

const deleteScholarship = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.deleteScholarship(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, 'ERROR_DELETE_SCHOLARSHIP');
    }
}

export {
    getAllScholarships,
    getScholarshipById,
    postScholarship,
    putScholarship,
    deleteScholarship
}