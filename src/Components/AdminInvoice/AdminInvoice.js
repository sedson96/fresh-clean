import React, {Component} from "react" 
import Modal from "react-awesome-modal";
import styles from "./AdminInvoice.module.scss";
import CreateInvoice from "../CreateInvoice/CreateInvoice";
import {connect} from "react-redux"
import { getInvoices } from "../../ducks/invoiceReducer";
import { getBuildings } from "../../ducks/buildingReducer";

class AdminInvoice extends Component {
    state = {
        toggle: false
    }
    componentDidMount() {
        this.props.getInvoices()
        this.props.getBuildings()
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
        const invoiceRows = this.props.invoices.map(row => {
            const date = new Date(row.date).toDateString()
            return (
                <tr>
                    <td>{date}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.paid ? "Paid" : "Pending"}</td>
                </tr>
            )
        })
        return (
            <>
            <div className={styles.placeholder}></div>
            <div className={styles.body}>
                <div className={styles.button}>
                    <button onClick={this.showForm}>Create New Invoice</button>
                    <Modal visible={this.state.toggle} effect="fadeInUp" onClickAway={() => this.showForm()}>
                        <CreateInvoice buildings={this.props.buildings} showForm={this.showForm}/>
                    </Modal>
                </div>
                 <table className={styles.charge}>
                        <tbody>
                            <tr>
                                <th width="15%">Date</th>
                                <th width="65%">Building</th>
                                <th width="10%">Total</th>
                                <th width="10%">Status</th>
                            </tr>
                            {invoiceRows}
                        </tbody>
                        </table>
            </div>
            </>
        )
    }
}
const mapStatetoProps = (reduxState) => {
    return {
        invoices: reduxState.invoice.invoices,
        buildings: reduxState.building.buildings
    }
}
export default connect(mapStatetoProps,{getInvoices,getBuildings})(AdminInvoice);