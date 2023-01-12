import express from "express";
import getCategories from "../../../services/book/getCategories.js";

const router = express.Router();

router.get("/", getCategories);

export default router;