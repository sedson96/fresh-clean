require("dotenv").config();
const nodemailer = require("nodemailer")

const {EMAIL_USERNAME, EMAIL_PASSWORD} = process.env

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD
    }
})

const frontSetUp = (from,subject,text) => {
    return {
        from,
        to: EMAIL_USERNAME,
        subject,
        text
    }
}

const frontContact = (request,response) => {
    const {email, subject, message,name } = request.body;
    const mail = frontSetUp(email,subject,message) 
    transporter.sendMail(mail, function (error,data) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent")
            response.sendStatus(200)
        }
    })
}
const contactClient = (request,response) => {
    const {email,subject,message} = request.body
    
}

module.exports = {
    frontContact,
}