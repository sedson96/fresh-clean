import axios from "axios";

const initialState = {
    invoices: []
}

export const GET_INVOICES = "GET_INVOICES"
export const GET_USER_INVOICES = "GET_USER_INVOICES"

export function getUserInvoices () {
    return {
        type: GET_USER_INVOICES,
        payload: axios.get("/api/invoices")
    }
}
export function getInvoices () {
    return {
        type: GET_INVOICES,
        payload: axios.get("/api/admin/invoices")
    }
}
function reducer (state=initialState,action) {
    const {type,payload} = action;
    console.log(action)
    switch(type){
        case `${GET_INVOICES}_FULFILLED`: 
            return {
                ...state,
                invoices: payload.data
            }
        case `${GET_USER_INVOICES}_FULFILLED`: 
            return {
                ...state,
                invoices: payload.data
            }
        default: return state
    }
}

export default reducer