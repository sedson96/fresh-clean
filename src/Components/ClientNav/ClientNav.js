import React, {Component} from "react"
import {Link} from "react-router-dom"

class ClientNav extends Component {
    constructor() {
        super() 
    }
    render() {
        return (
        <div>
            <Link to="/client"><h1>Dashboard</h1></Link> 
            <Link to="/client/invoice"><h1>Invoice</h1></Link>
            <Link to="/client/account"><h1>Account</h1></Link> 
        </div>
        )
    }
}

export default ClientNav