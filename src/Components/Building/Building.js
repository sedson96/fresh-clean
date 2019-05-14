import React, {Component} from "react" 
import styles from "./Building.module.scss"
import axios from "axios";


class Building extends Component {
    handleChange = (event) => {
        this.props = {
            ...this.props,
            [event.target.name]: event.target.checked
        }
        axios.put("/api/schedule", this.props)
        console.log(this.props)
    }
    render() {
        const {name, monday,tuesday, wednesday, thursday, friday} = this.props
        console.log(this.props)
        return (
        <div className={styles.detail}>
                    <i class="far fa-minus-square"></i>
            <h1>{name}</h1>
            <div className={styles.days}>
                <div className={styles.checks}>
                    <label>Monday</label>
                    <input name="monday" type="checkbox" onChange={this.handleChange} defaultChecked={monday}/>
                </div>
                <div className={styles.checks}>
                    <label>Tuesday</label>
                    <input name="tuesday" type="checkbox" onChange={this.handleChange} defaultChecked={tuesday}/>
                </div>
                <div className={styles.checks}>
                    <label>Wednesday</label>
                    <input name="wednesday" type="checkbox" onChange={this.handleChange} defaultChecked={wednesday}/>
                </div>
                <div className={styles.checks}>
                    <label>Thursday</label>
                    <input name="thursday" type="checkbox" onChange={this.handleChange} defaultChecked={thursday}/>
                </div>
                <div className={styles.checks}>
                    <label>Friday</label>
                    <input name="friday" type="checkbox" onChange={this.handleChange} defaultChecked={friday}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Building 