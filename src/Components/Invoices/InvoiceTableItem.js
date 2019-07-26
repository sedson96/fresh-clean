import React, {Component} from "react" 
import Modal from "react-awesome-modal"
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail"

class InvoiceTableItem extends Component {
    constructor() {
        super()
        this.state = {
            detail: false
        }
    }
    showDetail = () => {
       if (window.innerWidth < 980) return 
       if(this.state.detail) {
            this.setState({detail: false})
        } else {
            this.setState({detail: true})
        }
    } 
    render() {
        return (
        <>
        <Modal visible={this.state.detail} effect="fadeInUp" onClickAway={() => this.showDetail()}>
            <>
            <InvoiceDetail invoice={this.props.invoice}/>  
            </>
        </Modal>
        <tr onClick={this.showDetail}>
            <td>{this.props.invoice.date}</td>
            <td>{this.props.invoice.name}</td>
            <td>{this.props.invoice.price}</td>
            <td>{this.props.invoice.paid ? "Paid" : "Pending"}</td>
        </tr>
        </>
        )
    }
}

export default InvoiceTableItem