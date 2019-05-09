import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import routes from "../../clientRoutes"

class Client extends Component {
    render() {
        return (
        <>
        {!this.props.username && <Redirect to="/" />}
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