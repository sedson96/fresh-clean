const getClients = async (request,response) => {
    const db = request.app.get("db")
    const clients = await db.get_clients()
    console.log(clients)
    response.json(clients)
}
module.exports = {
    getClients
}