import { Router } from "express";
import * as controller from "../controllers/tutor";
import {isAdmin, isModerator} from "../middleware/session";

const router = Router();

router.get("/", isAdmin || isModerator, controller.getAllTutors);

router.get("/:_id", isAdmin || isModerator, controller.getTutorById);

router.post("/", isAdmin || isModerator, controller.postTutor);

router.put("/:_id", isAdmin || isModerator, controller.putTutor);

router.delete("/:_id", isAdmin, controller.deleteTutor);

export {
    router,
}