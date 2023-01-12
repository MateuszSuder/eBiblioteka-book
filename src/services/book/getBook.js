import BookSchema from "../../schemas/BookSchema.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;

    // Get book with given id
    try {
        const book = await BookSchema.findOne({_id: id});
        if(!book) return genericErrorResponse(res,null, 404);
        res.status(200).json(book);
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}