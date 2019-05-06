require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")

const { getSession,login,register,logout } = require("./controllers/authCtrl")
const { getCurrentWeek } = require("./controllers/scheduleCtrl")
const { getUserInvoices } = require("./controllers/invoiceCtrl")

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


//authentication
app.get("/auth/user", getSession);
app.post("/auth/login", login);
app.post("/auth/register", register);
app.get("/auth/logout", logout);

//scheduling
app.get("/api/schedule", getCurrentWeek)

//invoices
app.get("/api/invoices", getUserInvoices)

app.listen(SERVER_PORT, () => console.log("Listening on the port")) 