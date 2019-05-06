import React, {Component} from "react"
import styles from "./ClientInvoice.module.scss"
import Invoices from "../Invoices/Invoices"

class ClientInvoice extends Component {
    render() {
        return (
        <div className={styles.test}>
            <Invoices/>
        </div>
        )
    }
}

export default ClientInvoice