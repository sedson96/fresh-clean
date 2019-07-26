import React, {Component} from "react";
import {connect} from "react-redux"
import styles from "./AddUser.module.scss";
import {addClient} from "../../ducks/userReducer"

class AddUser extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            email: "",
            phone: "",
            username: "",
            password: ""
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleClick = (event) => {
        const {name,email,phone,username,password} = this.state
        this.props.addClient(name,email,phone,username,password)
    }
    render() {
        return (
               <form className={styles.formCont}>
                    <label>Name</label>
                    <input className={styles.smallInput} name="name" onChange={this.handleChange}/>
                    <label>Email</label>
                    <input className={styles.smallInput} name="email" onChange={this.handleChange}/>
                    <label>Phone</label>
                    <input className={styles.smallInput} name="phone" onChange={this.handleChange}/>
                    <label>Username</label>
                    <input className={styles.smallInput} name="username" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input className={styles.smallInput} name="password" onChange={this.handleChange}/>
                    <button className={styles.send} onClick={this.handleClick}>Create User</button>
                </form>   
        )
    }
}
const mapStatetoProps = (reduxState) =>{
    return {
        clients: reduxState.users.clients
    }
}
export default connect(mapStatetoProps,{addClient})(AddUser);