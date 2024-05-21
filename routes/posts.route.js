import { Router } from "express";
import {
  createPosts,
  getAllPosts,
  updatePosts,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/posts", getAllPosts);

router.post("/posts", createPosts);

router.put("/:id", updatePosts);

export default router;
