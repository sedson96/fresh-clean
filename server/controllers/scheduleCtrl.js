
const getSchedule = async (request,response) => {
    const db = request.app.get("db")
    const {id} = request.session.user
    const week = await db.get_users_schedules(id).catch(error => console.log(error));
    response.json(week)
}
const getAdminCurrentWeek = async (request, response) => {
    const db = request.app.get("db")
    const week = await db.get_schedule_week().catch(error => console.log(error));
    response.json(week)
}
const getWeeks = async (request, response) => {
    const db = request.app.get("db")
    const week = await db.get_weeks().catch(error => console.log(error));
    response.json(week)
}
const getAllSchedules = async (request, response) => {
    const db = request.app.get("db")
    const schedule = await db.get_all_schedules().catch(error => console.log(error));
    response.json(schedule)
}
const week = async (request, response) => {
    const db = request.app.get("db")
    const week = await db.get_week().catch(error => console.log(error));
    response.json(week[0])
}
const updateSchedule = async (request, response) => {
    const db = request.app.get("db")
    const {monday,tuesday,wednesday,thursday,friday,building,weekID} = request.body
    console.log(request.body)
    const result = await db.update_schedule([monday,tuesday,wednesday,thursday,friday,weekID,building])
    console.log(result)
    response.sendStatus(200)
}
const addSchedule = async (request,response) => {
    const db = request.app.get("db")
    const {weekID, buildingID} = request.body
    const result = await db.add_schedule([weekID,buildingID])
    console.log(result)
    response.json(result)
}
module.exports = {
    getSchedule,
    getAdminCurrentWeek,
    getWeeks,
    getAllSchedules,
    week,
    updateSchedule,
    addSchedule,
}