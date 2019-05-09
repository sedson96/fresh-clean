import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom"
import axios from "axios";
import { connect } from "react-redux"
import {setSession} from "../../ducks/authReducer"
import styles from "./Login.module.scss"

class Login extends Component {
    constructor() {
        super() 
        this.state = {
            username: "" ,
            password: "",
            login: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }
    async login() {
        const result = await axios.post("/auth/login", {username: this.state.username , password: this.state.password})
        .catch(error => console.log(error))
        console.log(result)
        if (result) {
            this.props.setSession(result.data)
            this.setState({login: true})
        } else {
            this.setState({username: "", password: ""})
            alert("Incorrect Username or Password")
        }
        
    }
    render() {
        return(
            <>
            {this.state.login && <Redirect to="/admin" />}
            <div className={styles.login}>
                <input name="username" value={this.state.username} onChange={this.handleChange}/>
                <input name="password" value={this.state.password} onChange={this.handleChange}/>
                <Link to='/'><button>Cancle</button></Link>
                <button onClick={this.login}>Login</button>
            </div>
            </>
        )
    }
}

function mapStateToProps (state) {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps,{setSession})(Login)