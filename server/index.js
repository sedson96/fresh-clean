require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")

const { getSession,login,register,logout } = require("./controllers/authCtrl")
const { getSchedule,getAdminCurrentWeek,getWeeks,getAllSchedules,week,updateSchedule,addSchedule,removeScheduled} = require("./controllers/scheduleCtrl")
const { getUserInvoices,getAllInvoices,createInvoice,paidInvoice } = require("./controllers/invoiceCtrl")
const { getClients } = require("./controllers/userCtrl")
const { getBuildings,getUsersBuilding } = require("./controllers/buildingCtrl");
const { frontContact } = require("./controllers/mailerCtrl")
const { payInvoice } = require("./controllers/stripeCtrl")

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
app.delete("/api/schedule/:buildingID/:weekID", removeScheduled)

//invoices
app.get("/api/invoices", getUserInvoices)
app.post("/api/invoices", createInvoice)
app.get("/api/admin/invoices", getAllInvoices)
app.post("/api/payinvoice", payInvoice,paidInvoice)

//buildings
app.get("/api/buildings", getBuildings)
app.get("/api/buildings/:id", getUsersBuilding)

//users
app.get("/api/clients", getClients)

app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => console.log("Listening on the port")) 