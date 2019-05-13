import axios from "axios";

const initialState = {
    schedule: [],
    current: null,
    weeks : [],
}


const GET_SCHEDULE = "GET_SCHEDEULE";
const GET_ADMIN_SCHEDULE = "GET_ADMIN_SCHEDULE";
const GET_WEEKS = "GET_WEEKS";
const GET_WEEK = "GET_WEEK";

export function getAdminSchedule() {
    return {
        type: GET_ADMIN_SCHEDULE,
        payload: axios.get("/api/admin/schedule").catch(error => {console.log(error)})
    }
}
export function getSchedule() {
    return {
        type: GET_SCHEDULE,
        payload: axios.get("/api/schedule").catch(error => {console.log(error)})
    }
}
export function getWeeks() {
    console.log("hit")
    return {
        type: GET_WEEKS,
        payload: axios.get("/api/weeks").catch(error => {console.log(error)})
    }
}
export function getWeek() {
    return {
        type: GET_WEEK,
        payload: axios.get("/api/week").catch(error => {console.log(error)})  
    }
}

function reducer (state = initialState, action) { 
    const {type,payload} = action
    console.log(action)
    switch(type) {
        case `${GET_ADMIN_SCHEDULE}_FULFILLED`: 
        return {
            ...state,
            schedule: payload.data
        }
        case `${GET_SCHEDULE}_FULFILLED`: 
        return {
            ...state,
            schedule: payload.data
        }
        case `${GET_WEEKS}_FULFILLED`: 
        return {
            ...state,
            weeks: payload.data
        }
        case `${GET_WEEK}_FULFILLED`:
        return {
            ...state,
            current: payload.data.week_id
            }
        default: return state;
    }
}

export default reducer