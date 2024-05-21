import { Router } from "express";
import {
  createPosts,
  getAllPosts,
  updatePosts,
} from "../../controllers/posts.controller.js";

const router = Router();

router.get("/", getAllPosts);

router.post("/", createPosts);

router.put("/:id", updatePosts);

export default router;
