import axios from "axios";

const initialState = {
    schedule: [],
    current: [],
    weeks : [],
}

const CURRENT_ADMIN_SCHEDULE = "CURRENT_ADMIN_SCHEDULE";
const CURRENT_SCHEDULE = "CURRENT_SCHEDULE";
const GET_SCHEDULE = "GET_SCHEDEULE";
const GET_WEEKS = "GET_WEEK";

export function getWeeks() {
    console.log("hit")
    return {
        type: GET_WEEKS,
        payload: axios.get("/api/weeks").catch(error => {console.log(error)})
    }
}
export function currentSchedule() {
    return {
        type: CURRENT_SCHEDULE,
        payload: axios.get("/api/admin/current").catch(error => {console.log(error)})
    }
}
export function getAdminSchedule() {
    return {
        type: CURRENT_ADMIN_SCHEDULE,
        payload: axios.get("/api/admin/schedule").catch(error => {console.log(error)})
    }
}
export function getSchedule() {
    return {
        type: GET_SCHEDULE,
        payload: axios.get("/api/schedule").catch(error => {console.log(error)})
    }
}

function reducer (state = initialState, action) { 
    const {type,payload} = action
    console.log(action)
    switch(type) {
        case `${CURRENT_ADMIN_SCHEDULE}_FULFILLED`: 
            return {
                ...state,
                current: payload.data
            }
        case `${CURRENT_SCHEDULE}_FULFILLED`: 
            return {
                ...state,
                current: payload.data
            }
        case `${GET_WEEKS}_FULFILLED`: 
            return {
                ...state,
                weeks: payload.data
            }
        case `${GET_SCHEDULE}_FULFILLED`: 
            return {
                ...state,
                schedule: payload.data
            }
        default: return state;
    }
}

export default reducer