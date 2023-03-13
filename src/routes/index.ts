import { Router } from "express";
import * as postController from "../controllers/post.controller";

export const router: Router = Router();

router.get("/", postController.index);
router.post("/", postController.store);
router.get("/:id", postController.show);
