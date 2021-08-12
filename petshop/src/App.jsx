import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

  // <Switch></Switch> - evita que o ReactRouter fique procurando pelo mesmo path

  return (

    <Router>

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/sobre'>
          <Sobre />
        </Route>

      </Switch>

    </Router>

  )

}

export default App
