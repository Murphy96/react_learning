import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
function App() {
  return (
    <Router>
      <div className = "container mt-5">
      <div className = "btn-group">
        <Link to = "/" className = "btn btn-dark">
          INICIO 
        </Link>
        <Link to = "/contacto" className = "btn btn-dark">
          CONTACTO
        </Link>
        <NavLink to = "/nosotros" className = "btn btn-dark" activeClassName = "active">
          NOSOTROS
        </NavLink>
      </div>
      <h1>Navbar ... </h1>
      <hr/>
      <Switch>
        <Route path = "/" exact>
          <Inicio></Inicio>
        </Route>
        <Route path = "/contacto">
          <Contacto></Contacto>
        </Route>
        <Route path = "/nosotros">
          <Nosotros></Nosotros>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
