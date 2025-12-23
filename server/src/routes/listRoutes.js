import express from "express";
import authmiddleware from "../middlewares/authMiddleware.js";
import {
    createList,
    getListByProject,
} from "../controllers/listController.js";

const router = express.Router();

router.post("/:projectId/lists", authmiddleware, createList);
router.get("/:projectId/lists", authmiddleware, getListByProject);

export default router;