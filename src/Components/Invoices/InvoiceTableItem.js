import React, {Component} from "react" 
import Modal from "react-awesome-modal"
import AddUser from "../AddUser/AddUser"

class InvoiceTableItem extends Component {
    constructor() {
        super()
        this.state = {
            detail: false
        }
    }
    showDetail = () => {
        if(this.state.detail) {
            this.setState({detail: false})
        } else {
            this.setState({detail: true})
        }
    } 
    render() {
        console.log(this.props)
        return (
        <>
        <Modal visible={this.state.detail} effect="fadeInUp" onClickAway={() => this.showDetail()}>
            <AddUser/>  
        </Modal>
        <tr onClick={this.showDetail}>
            <td>{this.props.invoice.zip}</td>
            <td>{this.props.invoice.name}</td>
            <td>{this.props.invoice.price}</td>
            <td>{this.props.invoice.paid}</td>
        </tr>
        </>
        )
    }
}

export default InvoiceTableItem