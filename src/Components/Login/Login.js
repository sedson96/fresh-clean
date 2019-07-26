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
        .catch(error => (error))
        if (result.data) {
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
                <div className={styles.inputs}>
                    <h1>Login</h1>
                    <input name="username" type="username" placeholder="Username"value={this.state.username} onChange={this.handleChange}/>
                    <input name="password" type="password" placeholder="Password"value={this.state.password} onChange={this.handleChange}/>
                    <div className={styles.buttons}>
                        <Link to='/'><button className="btn btn-primary" >Cancle</button></Link>
                        <button className="btn btn-primary" onClick={this.login}>Login</button>
                    </div>

                </div>
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