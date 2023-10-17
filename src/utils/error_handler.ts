import { Response } from "express";

const handlerHttp = (res: Response, error: string, errorRaw?: any) => {
    res.status(500);
    res.send({ error, errorRaw })
}

export {
    handlerHttp,
}