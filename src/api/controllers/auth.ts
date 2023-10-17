import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";
import { handlerHttp } from "../../utils/error_handler";

const register = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await registerUser(data);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_REGISTER_USER");
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await loginUser(data);
        res.send(result);
    } catch (e) {
        handlerHttp(res, "ERROR_LOGIN_USER");
    }
}

export {
 register,
 login,
}