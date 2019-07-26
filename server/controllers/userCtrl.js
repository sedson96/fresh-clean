const getClients = async (request,response) => {
    const db = request.app.get("db")
    const clients = await db.get_clients()
    response.json(clients)
}
module.exports = {
    getClients
}