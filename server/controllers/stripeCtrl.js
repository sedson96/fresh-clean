require("dotenv").config();

const stripe = new stripeLoader(process.env.STRIPE_KEY)

const charge = (token, amt) => {
    return stripe.charge.create({
        amount: amt * 100,
        currency: "usd",
        source: token,
        description: `Invoice`
    })
}

const invoice = async (request,response) => {
    try {
        const data = await charge(request.body.token.id, req.body.amount);

        res.sendStatus(200)
    } catch (event) {
        res.sendStatus(500)
    }
}


module.exports = {
    invoice,
}