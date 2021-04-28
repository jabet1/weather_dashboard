
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './App.css';

import Home from './components/Home'
import Settings from './components/Settings'

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <h2>Weather DashBoard</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to={'/'} className="nav-link col-sm"> Home </Link>
                  <Link to={'/settings'} className="nav-link col-sm">Settings</Link>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/settings' component={Settings} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
