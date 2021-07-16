import React from 'react'
import Navigation from './navigation'
import Main from './routes'
import "./App.css"


const App = () => (
  <div className="App">
    <Navigation />


    <Main />
    {/* <Switch>
      <Route exact path="/Home" component = {Home} />
      <Route exact path="/SearchPage" component={SearchPage} />
      <Route exact path="/ListingPage" component={ListingPage} />
      <Route exact path="/DetailsPage" component={DetailsPage} />
    </Switch> */}
  </div>
)

export default App;

