import express from "express";
import authmiddleware from "../middlewares/authMiddleware.js";
import {
    createTask,
    getTasksByList,
} from "../controllers/TaskController.js";

const router = express.Router();

router.post("/:listId/tasks", authmiddleware, createTask);
router.get("/:listId/tasks", authmiddleware, getTasksByList);

export default router;