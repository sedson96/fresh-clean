import React, {Component} from "react";
import UserCard from "../UserCard/UserCard";
import styles from "./AdminUser.module.scss";
import AddUser from "../AddUser/AddUser"
import Modal from "react-awesome-modal"

class AdminUser extends Component {
    constructor() {
        super()
        this.state = {
            addUser: false
        }
    }
    showForm = () => {
        if (this.state.addUser) {
            this.setState({addUser: false})
        } else {
            this.setState({addUser: true})
        }
    }
    render() {
        return (
            <>
            <Modal visible={this.state.addUser} effect="fadeInUp" onClickAway={() => this.showForm()}>
              <AddUser/>  
            </Modal>
            <div className={styles.placeholder} />
            <button onClick={this.showForm}>Add New Client</button>
            <div className={styles.fill}>
                <UserCard/>
            </div>
            </>
        )
    }
}

export default AdminUser