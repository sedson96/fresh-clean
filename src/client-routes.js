import React from "react"
import {Switch , Route} from "react-router-dom"
import ClientAccount from "./Components/ClientAccount/ClientAccount"
import ClientInvoice from "./Components/ClientInvoice/ClientInvoice"
import Dashboard from "./Components/Dashboard/Dashboard"



export default (
    <Switch>
        <Route  path="/client/account" component={ClientAccount} />
        <Route  path="/client/invoice" component={ClientInvoice} />
        <Route  path="/client" component={Dashboard} />
    </Switch>
)