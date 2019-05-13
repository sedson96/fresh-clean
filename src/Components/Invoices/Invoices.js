import React,{Component} from "react"
import styles from "./Invoices.module.scss"
import {connect} from "react-redux"
import { getUserInvoices } from "../../ducks/invoiceReducer";
import InvoiceTableItem from "./InvoiceTableItem"

class Invoices extends Component {
    componentDidMount() {
        this.props.getUserInvoices()
    }
    render () {
        console.log(this.props)
        const tableItems = this.props.invoices.map(invoice => {
            return <InvoiceTableItem invoice={invoice} />
        })
        return(
            <main className={styles.invoicebody}>
                <div className={styles.invoice}> 
                    <div className={styles.title}> 
                            <h1>Invoices</h1>
                    </div>
                        <table className={styles.charge}>
                        <tbody>
                            <tr>
                                <th width="15%">Date</th>
                                <th width="65%">Building</th>
                                <th width="10%">Total</th>
                                <th width="10%">Status</th>
                            </tr>
                            <tr>
                                <td>O1/20/2019</td>
                                <td>Dentist Office</td>
                                <td>$1400</td>
                                <td>Paid</td>
                            </tr>
                            {tableItems}
                        </tbody>
                        </table>
                </div>
            </main>
        )
    }
}
const mapStatetoProps = (reduxState) => {
    return {
        invoices: reduxState.invoice.invoices

    }
}
export default connect(mapStatetoProps,{getUserInvoices})(Invoices)