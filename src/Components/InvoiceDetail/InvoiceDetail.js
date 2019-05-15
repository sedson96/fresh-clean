import React, {Component} from "react"
import ReactStripeCheckout from "react-stripe-checkout"
import axios from "axios"
import styles from "./InvoiceDetail.module.scss"

class InvoiceDetail extends Component {
     onToken = async (token) => {
        const result = await axios.post("/api/payinvoice", {token, price: this.props.invoice.price, invoiceID: this.props.invoice.invoice_id })
    }
    render(){
        return (
            <div className={styles.invoices}>
            <div className={styles.head}>
                <h1>{this.props.invoice.invoice_id}</h1>
                <h1>{this.props.invoice.name}</h1>
            </div>
            <div className={styles.address}>
                <h3>{this.props.invoice.address}</h3>
                <h3>{this.props.invoice.city} {this.props.invoice.state}, {this.props.invoice.zip}</h3>
            </div>
            <div className={styles.paid}>
                <h2>{this.props.invoice.price}</h2>
                <h2>{this.props.invoice.paid ? 
                    "PAID" : 
                    <ReactStripeCheckout 
                    token={this.onToken}
                    stripeKey="pk_test_w40uYHl4s8Fepbjedno8FNz000Bhd1Abk6"
                    />}</h2>
            </div>
            </div>
        )
    }
}

export default InvoiceDetail