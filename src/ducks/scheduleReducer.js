import axios from "axios";

const initialState = {
    schedule: [],
    current: {}
}

const CURRENT_SCHEDULE = "CURRENT_SCHEDEULE";

export function currentSchedule() {
    return {
        type:CURRENT_SCHEDULE,
        payload: axios.get("api/schedule/3").catch(error => {console.log(error)})
    }
}

function reducer (state = initialState, action) { 
    const {type,payload} = action
    switch(type) {
        case `${CURRENT_SCHEDULE}_FULFFILED`: 
            return {
                ...state,
                current: [...payload]
            }
        default: return state;
    }
}

export default reducer