import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import './assets/css/base/base.css'

function App() {

  // <Switch></Switch> - evita que o ReactRouter fique procurando pelo mesmo path

  return (

    <Router>

      <Cabecalho />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/sobre'>
          <Sobre />
        </Route>

        <Route path='/posts/:id'>
          <Post />
        </Route>

        <Route>
          <Pagina404 />
        </Route>

      </Switch>

    </Router>

  )

}

export default App
