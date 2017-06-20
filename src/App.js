
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import RepoDetails from './components/RepoDetails';
import ServerError from './components/ServerError';

class App extends Component {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to='/about' activeClassName='active'>About</Link></li>
            <li><Link to='/repos' activeClassName='active'>Repos</Link></li>
          </ul>
        </menu>
        { this.props.children }
      </div>
    );
  }
}

render((
  <Router history={ createBrowserHistory() }>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='repos' component={Repos}>
        <Route path='/repo/:repo_name' component={RepoDetails} />
      </Route>
      <Route path='error' component={ServerError} />
    </Route>
  </Router>
  ), document.getElementById('root'));
