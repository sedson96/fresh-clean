import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import routes from "../../client-routes"
import ClientNav from "../ClientNav/ClientNav";

class Client extends Component {
    constructor() {
        super() 
    }
    render() {
        return (
        <>
        {!this.props.username && <Redirect to="/" />}
        <ClientNav/>
        {routes}
        </>
        )
    }
}

function mapStateToProps (state) {
    return {
        username: state.auth.username,
        isAdmin: state.auth.isAdmin
    }
}

export default connect(mapStateToProps)(Client)