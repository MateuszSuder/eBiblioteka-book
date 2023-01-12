import BookSchema from "../../schemas/BookSchema.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { search, category, offset, limit } = req.query;

    try {
        let query = {};
        search && (query.title = { "$regex": search });
        category && (query.category = category);

        BookSchema.find(query)
            .skip(offset || 0)
            .limit(limit || 10)
            .exec((err, books) => {
                if (err) return mongooseErrorResponse(res, err);

                BookSchema.countDocuments(query).exec((countError, count) => {
                    if (countError)
                        return mongooseErrorResponse(res, countError);

                    return res.status(200).json({
                        books,
                        pagination: {
                            offset: offset ? parseInt(offset) : 0,
                            limit: limit ? parseInt(limit) : 0,
                            count,
                        },
                    });
                });
            });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}