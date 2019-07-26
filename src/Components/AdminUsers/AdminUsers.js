import React, {Component} from "react";
import {connect} from "react-redux"
import UserCard from "../UserCard/UserCard";
import styles from "./AdminUser.module.scss";
import AddUser from "../AddUser/AddUser"
import Modal from "react-awesome-modal"
import { getClients } from "../../ducks/userReducer";

class AdminUser extends Component {
    constructor() {
        super()
        this.state = {
            addUser: false
        }
    }
    componentDidMount() {
        this.props.getClients()
    }
    showForm = () => {
        if (this.state.addUser) {
            this.setState({addUser: false})
        } else {
            this.setState({addUser: true})
        }
    }
    render() {
        const users = this.props.clients.map(client => {
            return <UserCard client={client} />
        })

        return (
            <>
            <Modal visible={this.state.addUser} effect="fadeInUp" onClickAway={() => this.showForm()}>
              <AddUser/>  
            </Modal>
            <div className={styles.placeholder} />
            <button className="btn btn-outline-secondary" onClick={this.showForm}>Add New Client</button>
            <div className={styles.fill}>
                {users}
            </div>
            </>
        )
    }
}

const mapStatetoProps = (reduxState) => {
    return {
        clients: reduxState.users.clients
    }
}
export default connect(mapStatetoProps,{getClients})(AdminUser)