import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Add from "../pages/Add";
import Download from "../pages/Download";
import Share from "../pages/Share";

const HeadSwitch = () => {
    return (
        <Switch>
        <Route path="/add/:vid" component={Add} />
        <Route path="/download/:vid" component={Download} />
        <Route path="/share/:vid" component={Share} />
        </Switch>
    )
}

export default HeadSwitch
