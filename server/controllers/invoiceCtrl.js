let getUserInvoices = async (request,response) => {
    const db = request.app.get("db")
    const {id} = request.session.user
    let invoices = await db.get_user_invoices(id)
    response.json(invoices)
}


module.exports = {
    getUserInvoices
}