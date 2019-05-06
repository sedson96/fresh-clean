
const getCurrentWeek = async (request,response) => {
    const db = request.app.get("db")
    const {id} = request.session.user
    console.log(id)
    console.log(id)
    const week = await db.client_week(id).catch(error => console.log(error));
    
    response.json(week)

}

module.exports = {
    getCurrentWeek,
}