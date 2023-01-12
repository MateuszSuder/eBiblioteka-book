import BookSchema from "../../schemas/BookSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    // Get user body request from req.body and save it to db
    try {
        const book = new BookSchema({
            ...req.body
        });

        const result = await book.save();

        res.status(201).json(result);
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}