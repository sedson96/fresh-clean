import React, {Component} from "react" 
import styles from "./AdminInvoice.module.scss";
import {connect} from "react-redux"
import { getInvoices } from "../../ducks/invoiceReducer";

class AdminInvoice extends Component {
    componentDidMount() {
        this.props.getInvoices()
    }
    render() {
        console.log(this.props)
        const invoiceRows = this.props.invoices.map(row => {
            const date = new Date(row.date).toDateString()
            return (
                <tr>
                    <td>{date}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.paid ? "Paid" : "Pending"}</td>
                </tr>
            )
        })
        return (
            <>
            <div className={styles.placeholder}></div>
            <div className={styles.body}>
                <div className={styles.button}>
                    <button>Create New Invoice</button>
                </div>
                 <table className={styles.charge}>
                        <tbody>
                            <tr>
                                <th width="15%">Date</th>
                                <th width="65%">Building</th>
                                <th width="10%">Total</th>
                                <th width="10%">Status</th>
                            </tr>
                            {invoiceRows}
                        </tbody>
                        </table>
            </div>
            </>
        )
    }
}
const mapStatetoProps = (reduxState) => {
    return {
        invoices: reduxState.invoice.invoices
    }
}
export default connect(mapStatetoProps,{getInvoices})(AdminInvoice);