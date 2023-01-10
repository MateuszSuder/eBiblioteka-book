import express from "express";
import getBooks from "../../services/book/getBooks.js";
import addBook from "../../services/book/addBook.js";
import withAuth from "../../framework/middlewares/withAuth.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", withAuth({ role: "LIBRARIAN" }), addBook);

export default router;