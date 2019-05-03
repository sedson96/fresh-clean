import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import Client from "./Components/Client/Client";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";


export default (
    <Switch>
        <Route  path="/client" component={Client} />
        <Route  path="/admin" component={Admin} />
        <Route  path="/login" component={Login} />
        <Route exact path="/" component={Home} />
    </Switch>
)