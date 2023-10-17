import { Request, Response, NextFunction } from "express";

const log = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    next();
}

export {
    log,
}