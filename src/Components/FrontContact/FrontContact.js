import React, {Component} from "react"
import styles from "./FrontContact.module.scss"
import axios from "axios";

class FrontContact extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }
    handleClick = (event) => {
        event.preventDefault()
        axios.post("/api/contact", this.state)

    }
    render() {
        return(
            <main className={styles.main} id="contact">
                <form className={styles.formCont}>
                    <label>Name</label>
                    <input className={styles.smallInput} name="name" onChange={this.handleChange}/>
                    <label>Email</label>
                    <input className={styles.smallInput} name="email" onChange={this.handleChange}/>
                    <label>Subject</label>
                    <input className={styles.smallInput} name="subject" onChange={this.handleChange}/>
                    <label>Message</label>
                    <textarea className={styles.largeInput} name="message" onChange={this.handleChange}/>
                    <button onClick={this.handleClick} className="btn btn-outline-secondary btn-lg">Contact Cleaners!</button>
                </form>
            </main>
        )
    }
}

export default FrontContact