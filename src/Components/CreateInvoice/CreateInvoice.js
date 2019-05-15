import React, {Component} from "react"
import styles from "./CreateInvoice.module.scss"
import {connect} from "react-redux"
import { createInvoice } from "../../ducks/invoiceReducer";

class CreateInvoice extends Component {
    state = {
        buildingID: "",
        price: null
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleClick = (event) => {
        this.props.createInvoice(this.state.buildingID,this.state.price)
        this.props.showForm()
    }
    render() {
        const dropdown = this.props.buildings.map(building => {
               return (
                    <option key={building.building_id} value={building.building_id}>{building.name}</option>
               )
           })
        return(
            <div className={styles.form}>
                <select onChange={this.handleChange} name="buildingID">
                    <option selected="defaultValue">Choose Date</option>
                    {dropdown}
                </select>
                <input onChange={this.handleChange} name="price" type="number" /> 
                <button onClick={this.handleClick} className="btn btn-outline-secondary"> Create Invoice</button>
            </div>
        )
    }
}

const mapStatetoProps = (reduxState) => {
    return {

    }
}
export default connect(mapStatetoProps,{createInvoice})(CreateInvoice);