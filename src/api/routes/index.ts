import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).filter((fileName) => {
    const file = fileName.split(".");
    if (file[0] !== "index") {
        import(`./${file[0]}`).then((module) => {
            router.use(`/${file[0]}`, module.router);
        });
    }
});

export {
    router,
}