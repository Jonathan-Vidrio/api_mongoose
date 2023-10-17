import { Router } from "express";
import * as controller from "../controllers/user"
import {isAdmin, isModerator} from "../middleware/session";

const router = Router();

router.get("/", isAdmin, isModerator, controller.getAllUsers);

router.get("/:_id", isAdmin, isModerator, controller.getUserById);

router.post("/", isAdmin, isModerator, controller.postUser);

router.put("/:_id", isAdmin, isModerator, controller.putUser);

router.delete("/:_id", isAdmin, isModerator, controller.deleteUser);

export {
    router,
}