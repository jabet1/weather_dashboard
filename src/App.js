
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css';

import Home from './components/Home'
import Settings from './components/Settings'

import reducer from './reducers/reducer.js'

const store = createStore(reducer)

class App extends Component {   
  render() {
    return (
        <Provider store={store}>
          <Router >
            <div className="App">
              <h1>Weather DashBoard</h1>
              <nav className="navbar navbar-expand-lg navbar-light bg-light mr-4 ml-4">
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
        </Provider>
    );
  }
}
export default App;
