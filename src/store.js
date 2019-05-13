import { createStore,combineReducers,applyMiddleware } from "redux"
import promise from "redux-promise-middleware";
import auth from "./ducks/authReducer"
import schedule from "./ducks/scheduleReducer"
import invoice from "./ducks/invoiceReducer"
import users from "./ducks/userReducer";

const rootReducer = combineReducers( {
    auth,
    schedule,
    invoice,
    users
})

const store = createStore(rootReducer,applyMiddleware(promise))


export default store;