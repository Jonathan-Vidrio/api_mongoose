import { Router } from "express";
import * as controller from "../controllers/scholarship";
import { isAdmin, isModerator } from "../middleware/session";

const router = Router();

router.get("/", isAdmin, isModerator, controller.getAllScholarships);

router.get("/:_id", isAdmin, isModerator, controller.getScholarshipById);

router.post("/", isAdmin, isModerator, controller.postScholarship);

router.put("/:_id", isAdmin, isModerator, controller.putScholarship);

router.delete("/:_id", isAdmin, controller.deleteScholarship);

export {
    router,
}