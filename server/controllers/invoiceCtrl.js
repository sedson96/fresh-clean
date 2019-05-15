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
const createInvoice = async (request,response) => {
    const db = request.app.get("db")
    const {buildingID, price} = request.body
    const invoices = await db.create_invoice([price,buildingID])
    response.json(invoices)
}
const paidInvoice = async (request,response) => {
    const db = request.app.get("db")
    const {invoiceID} = request.body
    const invoices = await db.payInvoice(invoiceID)
    response.json(invoices)
}
module.exports = {
    getUserInvoices,
    getAllInvoices,
    createInvoice,
    paidInvoice
}