import { NextFunction, Request, Response } from "express";
import {verifytoken} from "../../utils/jwt_handler";
import {getRole} from "../services/role";
import IUser from "../interfaces/user.interface";

const isSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ").pop() || ""
        const isUser = await verifytoken(token);
        if(!isUser) {
            return res
                .status(401)
                .send("INVALID_SESSION_TOKEN");
        } else {
            req.body.user = isUser;
            next();
        }
    } catch (e) {
        console.log(e);
        res.status(400)
            .send("INVALID_SESSION");
    }
}

const isAdmin= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ").pop() || ""
        const isUser = await verifytoken(token);
        if(!isUser)
            return res
                .status(401)
                .send("SESSION_EXPIRED");

        const isRole = await getRole(isUser as IUser, "admin");
        if(!isRole) {
            return res
                .status(401)
                .send("ROLE_INVALID");
        }

        next();
    } catch (e) {
        console.log(e);
        res.status(400)
            .send("SESSION_INVALID");
    }
}

const isModerator = async (req: Request, res: Response, next: NextFunction) => {

}

const isUser = async (req: Request, res: Response, next: NextFunction) => {

}

export {
    isSession,
    isAdmin,
    isModerator,
    isUser,
}