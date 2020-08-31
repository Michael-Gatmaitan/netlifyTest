import React, { Component, useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

// <Link> used tag as <a> with attr of `to="/dist"`
// <Switch> activating Links
// <Route> wrap where to use Route
// <Router>

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './index.css';

import { MyProvider } from './MyProvider';

class App extends Component {

  render() {

    return (
      <Router>

        <MyProvider>
          <nav>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </nav>
          
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </MyProvider>

      </Router>
    )
  }
}
 
export default App;

function NotFound() {
  let location = useLocation();

  return (
    <h1>404 Page not found. {location.pathname} is not available</h1>
  )
}