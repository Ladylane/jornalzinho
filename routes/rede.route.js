import express from "express";
import RedeController from "../controllers/rede.controller.js";

const router = express.Router();
router.get("/", RedeController.getRedes);

export default router;
