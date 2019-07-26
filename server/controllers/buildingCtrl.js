const getBuildings = async (request,response) => {
    const db = request.app.get("db")
    const results = await db.get_buildings()
    response.json(results)
}
const getUsersBuilding = async (request,response) => {
    const db = request.app.get("db")
    const {id} = request.params
    const results = await db.get_users_building(id)
    response.json(results)
}

module.exports = {
    getBuildings,
    getUsersBuilding
}