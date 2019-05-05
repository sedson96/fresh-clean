import React, {Component} from "react"
import styles from "./ClientAccount.module.scss"

class ClientAccount extends Component {
    render() {
        return (
        <div className={styles.test}>
            <h1>Client Account Page</h1>
            <h1>Username</h1>
            <h2>The Name</h2>
            <h1>email</h1>
            <h2>whatever@wherever.com</h2>
            <h1>Buildings</h1>
            <h2>Building address</h2>
            <h2>City</h2>
            <h2>State</h2>
            <h2>Zip</h2>
            
        </div>
        )
    }
}

export default ClientAccount