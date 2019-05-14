import React, {Component} from "react"
import {Link} from "react-router-dom"
import styles from "./UserDetail.module.scss"

class UserDetail extends Component {
    constructor() {
        super()
    }
    render() {
        const buildings = this.props.buildings.map(building => {
            return (
                <>
                <li><strong>{building.name}</strong></li> 
                <li>{` ${building.address} ${building.city} ${building.state} ${building.zip}`}</li>
                </>
                )
                
        })
        return (
            <div className={styles.detailed}>
                <h1>{this.props.client.name}</h1>
                <div className={styles.info}>
                    <h3>{this.props.client.phone}</h3>
                    <h3>{this.props.client.email}</h3>
                </div>
                <h4>Buildings: </h4>
                <ul>
                    {buildings}
                </ul>
                <div className={styles.buttons}>
                    <Link to={`/admin/contact/${this.props.client.user_id}`}><button className="btn btn-outline-secondary">Contact Client</button></Link>
                    <button className="btn btn-outline-secondary">Add New Building</button>
                </div>
            </div>
        )
    }
}

export default UserDetail;