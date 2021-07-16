import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SearchPage } from './Pages/SearchPage'
import {ListingPage} from './Pages/ListingPage'
import {DetailsPage} from './Pages/DetailsPage'

export const Main = () => {
    return(
        <Switch>
            <Route exact path = '/SearchPage' component = { SearchPage }></Route>
            <Route exact path = '/DetailsPage' component = { DetailsPage }></Route>
            <Route exact path = '/ListingPage' component = { ListingPage }></Route>

        </Switch>
    )
}