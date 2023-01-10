/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { search, category, offset, limit } = req.query;

    // Get all books that partially match search and match category.
    // Skip results by offset, limit with limit (no limit = return all)

    res.status(501).send(`Get books ${[search, category, offset, limit]}`);
}