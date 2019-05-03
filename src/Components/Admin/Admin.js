import React, {Component} from "react"
import {connect} from "react-redux";
import {getSession} from "../../ducks/authReducer"
import {Redirect} from "react-router-dom"

class Admin extends Component {
    componentDidMount () {
        this.props.getSession()
    }
    render() {
        console.log(this.props)

        return (
            <>
        {!this.props.isAdmin && <Redirect to="/client" />}
        <div>
            <h1>Admin Page</h1>
        </div>
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
export default connect(mapStateToProps,{getSession})(Admin)