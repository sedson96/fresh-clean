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
            return (
                <tr>
                    <td>{row.price}</td>
                    <td>{row.paid}</td>
                    <td>{row.invoice_id}</td>
                    <td>{row.building_id}</td>
                </tr>
            )
        })
        return (
            <>
            <div className={styles.placeholder}></div>
            <div className={styles.body}>
                <div>
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