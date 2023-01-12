import BookSchema from "../../schemas/BookSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    // Return all categories without duplicates

    try {
        const categories = await BookSchema.distinct("category");

        res.status(200).json({categories});
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}