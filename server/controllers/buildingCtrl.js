const getBuildings = async (request,response) => {
    const db = request.app.get("db")
    const results = await db.get_buildings()
    console.log(results)
    response.json(results)
}

module.exports = {
    getBuildings
}