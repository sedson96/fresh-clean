import React, {Component} from "react";
import { connect } from "react-redux"
import styles from "./UserCard.module.scss"
import Modal from "react-awesome-modal";
import UserDetail from "../UserDetail/UserDetail"

class UserCard extends Component {
    constructor() {
        super() 
        this.state = {
            toggle: false
        }
    }
    showForm = () => {
        if (this.state.toggle) {
            this.setState({toggle: false})
        } else {
            this.setState({toggle: true})
        }
    }
    render() {
        console.log(this.props)
        return(
            <> 

            <article >
            <Modal visible={this.state.toggle} effect="fadeInUp" onClickAway={() => this.showForm()}>
              <UserDetail client={this.props.client}/>  
            </Modal>
            <div onClick={this.showForm} className={styles.userCard}>
                <div>
                    <h1>{this.props.client.name}</h1>
                    <h4>{this.props.client.phone}</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: {this.props.client.user_id}</h2>
                </div>
            </div>
            </article>
            </>
        )
    }
}

function mapStatetoProps (reduxState) {
    return {
        users: reduxState.users.clients
    }
}
export default connect(mapStatetoProps)(UserCard)