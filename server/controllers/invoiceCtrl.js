const getUserInvoices = async (request,response) => {
    const db = request.app.get("db")
    const {id} = request.session.user
    const invoices = await db.get_user_invoices(id)
    response.json(invoices)
}
const getAllInvoices = async (request,response) => {
    const db = request.app.get("db")
    const invoices = await db.get_invoices()
    response.json(invoices)
}


module.exports = {
    getUserInvoices,
    getAllInvoices
}