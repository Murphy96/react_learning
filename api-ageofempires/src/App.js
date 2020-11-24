import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Nosotros from './components/Nosotros';
import Index from './components/Index';
import Contacto from './components/Contacto';
import Users from './components/Users';


function App() {
  return (
    <Router>
      <div className = "container mt-5">
        <div className = "btn-group">
          <Link to = "/" className = "btn btn-dark">
            Inicio
          </Link>
          <Link to = "/contacto" className = "btn btn-dark">
            Contacto
          </Link>
          <NavLink to = "/nosotros" className = "btn btn-dark" activeClassName = "active">
            Nosotros
          </NavLink>
        </div>
        <h1>Navbar ... </h1>
        <hr/>
        <Switch>
          <Route path ="/nosotros/:id">
            <Users></Users>
          </Route>
          <Route path = "/" exact>
            <Index></Index>
          </Route>
          <Route path = "/contacto" exact>
            <Contacto></Contacto>
          </Route>
          <Route path = "/nosotros" exact>
            <Nosotros></Nosotros>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
