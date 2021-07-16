import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SearchPage } from './Pages/SearchPage'
import DetailsPage from './Pages/DetailsPage'
import {Home} from './Home'

const Main = () => {
    return(
        <Switch>
            <Route exact path= "/" component = {Home} />
            <Route exact path = '/SearchPage' component = { SearchPage }></Route>
            <Route exact path = '/DetailsPage/:id' component = {DetailsPage }></Route>
        </Switch>
    )
}

export default Main