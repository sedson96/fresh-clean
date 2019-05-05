import React,{Component} from "react"
import styles from "./Invoices.module.scss"

class Invoices extends Component {
    render () {
        return(
            <main className={styles.invoicebody}>
                <div className={styles.invoice}> 
                    <div className={styles.title}> 
                            <h1>hello</h1>
                    </div>
                        <div className={styles.charge}>
                            <div><h4>date</h4></div>
                            <div><h4>building</h4></div>
                            <div><h4>$1400</h4></div>
                            <div><h4>paid</h4></div>
                        </div>
                </div>
            </main>
        )
    }
}

export default Invoices