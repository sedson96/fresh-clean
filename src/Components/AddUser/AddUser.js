import React, {Component} from "react";
import styles from "./AddUser.module.scss";
// import axios from "axios"

class AddUser extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    // register = async ()  => {
    //     // let results = await axios.post("/api/register", {}).catch(error => console.log(error))
    // }
    render() {
        return (
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
        )
    }
}

export default AddUser;