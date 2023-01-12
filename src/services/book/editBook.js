import BookSchema from "../../schemas/BookSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;
    const book = req.body;

    // Replace content of book with given body (book variable)
    try {
        const result = await BookSchema.findOneAndUpdate(
            {_id: id},
            { ...book }
        )

        if(!result) return genericErrorResponse(res,null, 404);

        res.status(200).json(result);
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}