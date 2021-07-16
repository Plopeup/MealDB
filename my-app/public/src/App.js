import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './navigation'
import { SearchPage } from './Pages/SearchPage'
import {ListingPage} from './Pages/ListingPage'
import {DetailsPage} from './Pages/DetailsPage'

import "./App.css"


const Home = () => (
  <div className = "home">
    <h1>Home</h1>
  </div>
)

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/Home" component = {Home} />
      <Route exact path="/SearchPage" component={SearchPage} />
      <Route exact path="/ListingPage" component={ListingPage} />
      <Route exact path="/DetailsPage" component={DetailsPage} />
    </Switch>
  </div>
)

export default App;
