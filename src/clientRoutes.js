import React from "react"
import {Switch , Route} from "react-router-dom"
import ClientAccount from "./components/ClientAccount/ClientAccount"
import ClientInvoice from "./components/ClientInvoice/ClientInvoice"
import Dashboard from "./components/Dashboard/Dashboard"



export default (
    <Switch>
        <Route  path="/client/account" component={ClientAccount} />
        <Route  path="/client/invoice" component={ClientInvoice} />
        <Route  path="/client" component={Dashboard} />
    </Switch>
)