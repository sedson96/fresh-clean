import React, {Component} from "react" 

class UserDetail extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.client.name}</h1>
                <h1>{this.props.client.phone}</h1>
                <h1>{this.props.client.email}</h1>
                <h1>{this.props.client.name}</h1>
                <h1>{this.props.client.name}</h1>
                <button>Contact Client</button>
                <button>Add New Building</button>
            </div>
        )
    }
}

export default UserDetail;