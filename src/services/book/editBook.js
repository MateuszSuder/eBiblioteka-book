/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;
    const book = req.body;

    // Replace content of book with given body (book variable)

    // Return 404 if not found with given id

    res.status(501).send(book);
}