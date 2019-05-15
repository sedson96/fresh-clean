require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
// const stripe = new stripeLoader(process.env.STRIPE_KEY)

const charge = (token, amt) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: "usd",
        source: token,
        description: `Invoice`
    })
}

const payInvoice = async (request,response,next) => {
    try {
        const data = await charge(request.body.token.id, request.body.price);
        console.log("hit")
        next()
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
    }
}


module.exports = {
    payInvoice,
}