import React, {Component} from "react"
import styles from "./FrontContact.module.scss"

class FrontContact extends Component {
    render() {
        return(
            <main className={styles.main} id="contact">
                <form className={styles.formCont}>
                    <label>Name</label>
                    <input className={styles.smallInput} name="name" />
                    <label>Email</label>
                    <input className={styles.smallInput} name="name" />
                    <label>Subject</label>
                    <input className={styles.smallInput} name="name" />
                    <label>Message</label>
                    <input className={styles.largeInput} name="name" />
                    <button className={styles.send}>Send</button>
                </form>
            </main>
        )
    }
}

export default FrontContact