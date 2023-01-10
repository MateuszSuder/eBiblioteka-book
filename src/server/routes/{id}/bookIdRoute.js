import express from "express";
import getBook from "../../../services/book/getBook.js";
import editBook from "../../../services/book/editBook.js";
import withAuth from "../../../framework/middlewares/withAuth.js";

const router = express.Router({mergeParams: true});

router.get("/", getBook);
router.put("/", withAuth({ role: "LIBRARIAN" }), editBook);

export default router;