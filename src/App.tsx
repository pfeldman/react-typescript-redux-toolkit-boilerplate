import React from 'react'
import { Home, News } from 'scenes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <News />
      </Route>
    </Switch>
  </Router>
)

export default App
