/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;

    // Get book with given id

    // Return 404 if not found with given id

    res.status(501).send(`Get book ${id}`);
}