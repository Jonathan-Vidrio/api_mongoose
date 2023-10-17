import { Request, Response } from "express";
import { handlerHttp } from "../../utils/error_handler";
import * as services from "../services/user";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await services.getUsers();
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_GET_ALL_USERS");
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.getUser(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_GET_USER_BY_ID");
    }
}

const getUserByUsername = async (req: Request, res: Response) => {
    try {

    } catch (e) {
        handlerHttp(res, "ERROR_GET_USER_BY_USERNAME");
    }
}

const getUserByEmail = async (req: Request, res: Response) => {
    try {

    } catch (e) {
        handlerHttp(res, "ERROR_GET_USER_BY_EMAIL");
    }
}

const postUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await services.registerUser(body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_POST_USER", e);
    }
}

const putUser = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const { body } = req;
        const result = await services.updateUser(_id, body);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_POST_USER");
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await services.deleteUser(_id);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_DELETE_USER");
    }
}

export {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    postUser,
    putUser,
    deleteUser,
}