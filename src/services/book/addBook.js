/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;

    // Get user body request from req.body and save it to db

    res.status(501).send(req.body);
}