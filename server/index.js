require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")

const { getSession,login,register,logout } = require("./controllers/authCtrl")
const { getSchedule,getAdminCurrentWeek,getWeeks,getAllSchedules,week,updateSchedule,addSchedule} = require("./controllers/scheduleCtrl")
const { getUserInvoices,getAllInvoices } = require("./controllers/invoiceCtrl")
const { getClients } = require("./controllers/userCtrl")
const { getBuildings } = require("./controllers/buildingCtrl");
const { frontContact } = require("./controllers/mailerCtrl")

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(dbinstance => {
    app.set("db",dbinstance)
    console.log("database connected")
}).catch(error => console.log(error))

app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

//mail 
app.post("/api/contact", frontContact)
//authentication
app.get("/auth/user", getSession);
app.post("/auth/login", login);
app.post("/auth/register", register);
app.get("/auth/logout", logout);

//scheduling
app.get("/api/schedule", getSchedule)
app.post("/api/schedule", addSchedule)
app.put("/api/schedule", updateSchedule)
app.get("/api/admin/current", getAdminCurrentWeek)
app.get("/api/admin/schedule", getAllSchedules)
app.get("/api/weeks", getWeeks)
app.get("/api/week", week)

//invoices
app.get("/api/invoices", getUserInvoices)
app.get("/api/admin/invoices", getAllInvoices)

//buildings
app.get("/api/buildings", getBuildings)

//users
app.get("/api/clients", getClients)

app.listen(SERVER_PORT, () => console.log("Listening on the port")) 